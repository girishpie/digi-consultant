/**
 * Created by gipai on 9/26/2017.
 */
package application.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


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
}