package application.auth.roles;


import application.response.RestError;
import application.response.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
@RestController
@RequestMapping("/role")
public class RoleController {

    @Autowired
    private final RoleRepository roleRepository;

    public RoleController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<RestResponse> add(@RequestBody Role input) {
        Role role = roleRepository.save(new Role(input.getName(),input.getPermissions()));
        RestResponse response = new RestResponse( role.getId());
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(), HttpStatus.OK);

    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> listAllCompanies() {
        List<Role> companies = roleRepository.findAll();
        if (companies.isEmpty()) {
            RestError restError = new RestError("No Roles found", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        RestResponse response = new RestResponse( companies);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }
}
