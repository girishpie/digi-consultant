/**
 * Created by gipai on 9/26/2017.
 */
package application.company;

import application.RestError;
import application.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public class CompanyController {

    private final CompanyRepository companyRepository;


    @Autowired
    CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_COMPANY')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<RestResponse> add(@RequestBody Company input) {
        Company company = companyRepository.save(new Company(input.getCompanyName(),
                input.getAddress()));
        RestResponse response = new RestResponse( company.getId());
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);

    }

    @PreAuthorize("hasAuthority('DELETE_COMPANY')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<RestResponse> delete(@PathVariable String id) {
        long res = companyRepository.deleteById(id);
        RestResponse response = new RestResponse( res);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('READ_COMPANY')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Company> companies = companyRepository.findAll();
        if (companies.isEmpty()) {
            RestError restError = new RestError("No Companies found", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        RestResponse response = new RestResponse( companies);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('READ_COMPANY')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
        Company company = companyRepository.findById(id);
        if (company == null) {
            RestError restError = new RestError("Company With: "+ id + " does not exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());

        }
        RestResponse response = new RestResponse( company);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);

    }
}