package application.employee;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.company.Company;
import application.company.CompanyRepository;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@Autowired
	private final EmployeeRepository employeeRepository;
	@Autowired
	private final CompanyRepository companyRepository;
	
	
	EmployeeController(EmployeeRepository employeeRepository, CompanyRepository companyRepository) {
        this.employeeRepository = employeeRepository;
        this.companyRepository = companyRepository;
    }
	
	@PreAuthorize("hasAuthority('CREATE_EMPLOYEE')")
    @RequestMapping(value = "/{companyId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String companyId , @RequestBody Employee input ) {
		Company company = companyRepository.findById(companyId);
        if(company == null){
            return ResponseWrapper.getResponse(new RestError("Company With: "+ companyId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Employee employee = new Employee(input.getFirstname(), input.getLastname(), input.getDOB(), input.getGender(), input.getRole(), input.getEmail(),
    			input.getAddress(), input.getCity(), input.getCountry(), input.getMobile(), input.getTelephone(), input.getCompanyId(), input.getProjectIds());
        Employee emp = employeeRepository.save(employee);
        company.addEmployee(emp.getId());
        companyRepository.save(company);
        return ResponseWrapper.getResponse(new RestResponse(emp.getId()));
    }

    @PreAuthorize("hasAuthority('DELETE_EMPLOYEE')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Employee employee = employeeRepository.findById(id);
        RestError restError ;
        if(employee == null){
            return ResponseWrapper.getResponse( new RestError("Employee With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        Company company = companyRepository.findById(employee.getCompanyId());
        if(company == null){
            return ResponseWrapper.getResponse( new RestError("Company With: "+ company.getId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = employeeRepository.deleteById(id);
        company.deleteEmployee(id);
        companyRepository.save(company);
        return ResponseWrapper.getResponse( new RestResponse(res));

    }
    
    @PreAuthorize("hasAuthority('UPDATE_EMPLOYEE')")
    @RequestMapping(value = "/{empId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String empId, @RequestBody Employee input){
    	Employee employee = employeeRepository.findById(empId);
        if(employee == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as employee with id " + empId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        employee.setFirstname(input.getFirstname());
        employee.setLastname(input.getLastname());
        employee.setEmail(input.getEmail());
        employee.setDOB(input.getDOB());
        employee.setGender(input.getGender());
        employee.setRole(input.getRole());
        employee.setCountry(input.getCountry());
        employee.setAddress(input.getAddress());
        employee.setCity(input.getCity());
        employee.setMobile(input.getMobile());
        employee.setTelephone(input.getTelephone());
        employee.setCompanyId(input.getCompanyId());
        employee.update();
        employee = employeeRepository.save(employee);
        return ResponseWrapper.getResponse(new RestResponse(employee));
    }

    @PreAuthorize("hasAuthority('READ_EMPLOYEE')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Employee> employees = employeeRepository.findAll();
        
        if (employees.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No employees are exist", HttpStatus.NOT_FOUND));
         }
        List<EmployeeDto> employeeDtos = new ArrayList<EmployeeDto>();
        for(int i = 0; i < employees.size(); i++ ) {
        	 Company company = companyRepository.findById(employees.get(i).getCompanyId());
        	EmployeeDto employeeDto = new EmployeeDto(employees.get(i), company.getCompanyName());
            employeeDtos.add(employeeDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(employeeDtos));

    }

    @PreAuthorize("hasAuthority('READ_EMPLOYEE')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Employee employee = employeeRepository.findById(id);
        if (employee == null) {
            return ResponseWrapper.getResponse( new RestError("Employee With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        Company company = companyRepository.findById(employee.getCompanyId());
        EmployeeDto employeeDto = new EmployeeDto(employee, company.getCompanyName());
        return ResponseWrapper.getResponse( new RestResponse(employeeDto));
    }

}
