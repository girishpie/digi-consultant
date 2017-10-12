package application.office;

//import application.RestError;
//import application.response.*;
import application.company.Company;
import application.company.CompanyRepository;
import application.response.RestError;
import application.response.RestResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/office")
public class OfficeController {
	@Autowired
    private final OfficeRepository officeRepository;
	@Autowired
    private final CompanyRepository companyRepository;
 
    OfficeController(CompanyRepository companyRepository , OfficeRepository officeRepository) {
        this.companyRepository = companyRepository;
        this.officeRepository = officeRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_OFFICE')")
    @RequestMapping(value = "/{companyId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String companyId , @RequestBody Office input ) {
        Company company = companyRepository.findById(companyId);
        if(company == null){
            RestError restError = new RestError("Company With: "+ companyId + " does not exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        Office office = new Office(input.getAddress(), input.getTel(), input.getTel(), company.getId());
        Office Office = officeRepository.save(office);
        company.addOffice(office.getId());
        companyRepository.save(company);
        RestResponse response = new RestResponse( Office.getId());
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }


    @PreAuthorize("hasAuthority('DELETE_OFFICE')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
        Office office = officeRepository.findById(id);
        RestError restError ;
        if(office == null){
            restError = new RestError("Office With: "+ id + " does not exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        Company company = companyRepository.findById(office.getId());
        if(company == null){
            restError = new RestError("Company With: "+ office.getId() + " does not exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        long res = officeRepository.deleteById(id);
        company.deleteOffice(id);
        companyRepository.save(company);
        RestResponse response = new RestResponse(res);
        return new ResponseEntity<Object>(response,  new HttpHeaders(),HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('READ_OFFICE')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Office> offices = officeRepository.findAll();
        if (offices.isEmpty()) {
            RestError restError = new RestError("No offices are exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        RestResponse response = new RestResponse(offices);
        return new ResponseEntity<Object>(response,  new HttpHeaders(),HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('READ_OFFICE')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
        Office office = officeRepository.findById(id);
        if (office == null) {
            RestError restError = new RestError("Office With: "+ id + " does not exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        RestResponse response = new RestResponse(office);
        return new ResponseEntity<Object>(response,  new HttpHeaders(),HttpStatus.OK);
    }
}