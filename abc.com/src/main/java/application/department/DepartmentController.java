package application.department;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import application.company.Company;
import application.company.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by gipai on 9/27/2017.
 */
@RestController
@RequestMapping("/department")
public class DepartmentController {

    private final DepartmentRepository departmentRepository;

    private final CompanyRepository companyRepository;
    @Autowired
    DepartmentController(CompanyRepository companyRepository , DepartmentRepository departmentRepository) {
        this.companyRepository = companyRepository;
        this.departmentRepository = departmentRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_DEPARTMENT')")
    @RequestMapping(value = "/{companyId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String companyId , @RequestBody Department input ) {
        Company company = companyRepository.findById(companyId);
        if(company == null){
            return ResponseWrapper.getResponse(new RestError("Company With: "+ companyId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Department dept= new Department(input.getName(),company.getId());
        Department Department = departmentRepository.save(dept);
        company.addDepartment(dept.getId());
        companyRepository.save(company);
        return ResponseWrapper.getResponse(new RestResponse( Department.getId()));
    }

    //Delete Specific department
    @PreAuthorize("hasAuthority('DELETE_DEPARTMENT')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
        Department department = departmentRepository.findById(id);
        RestError restError ;
        if(department == null){
            return ResponseWrapper.getResponse( new RestError("Department With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        Company company = companyRepository.findById(department.getId());
        if(company == null){
            return ResponseWrapper.getResponse( new RestError("Company With: "+ department.getId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = departmentRepository.deleteById(id);
        company.deleteDepartment(id);
        companyRepository.save(company);
        return ResponseWrapper.getResponse( new RestResponse(res));

    }

    @PreAuthorize("hasAuthority('READ_DEPARTMENT')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Department> companies = departmentRepository.findAll();
        if (companies.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No departments exist", HttpStatus.NOT_FOUND));
         }
        return ResponseWrapper.getResponse(new RestResponse(companies));

    }

    @PreAuthorize("hasAuthority('READ_DEPARTMENT')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
        Department department = departmentRepository.findById(id);
        if (department == null) {
            return ResponseWrapper.getResponse( new RestError("Department With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse(department));
    }
}