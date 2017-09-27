/**
 * Created by gipai on 9/26/2017.
 */
package application.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/company")
public class CompanyController {

    private final CompanyRepository CompanyRepository;


    @Autowired
    CompanyController(CompanyRepository CompanyRepository) {
        this.CompanyRepository = CompanyRepository;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    String add(@RequestBody Company input) {
        Company company = CompanyRepository.save(new Company(input.companyName,
                input.address));
        return company.getId();

    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.DELETE)
    long delete(@RequestBody String id) {
        long res = CompanyRepository.deleteById(id);
        return res;
    }


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Company>> listAllCompanies() {
        List<Company> companies = CompanyRepository.findAll();
        if (companies.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
            // You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Company>>(companies, HttpStatus.OK);
    }

    // -------------------Retrieve Single User------------------------------------------

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getUser(@PathVariable("id") String id) {
        Company company = CompanyRepository.findById(id);
        if (company == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Company>(company, HttpStatus.OK);
    }
}