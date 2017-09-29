package application.auth.user;

import application.RestError;
import application.RestResponse;
import application.auth.roles.Role;
import application.auth.roles.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final RoleRepository roleRepository;

    public UserController(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @PreAuthorize("hasPriviledge('CREATE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<RestResponse> add(@RequestBody User input) {
        User user = userRepository.save(new User(input.getUsername(),
                input.getPassword(),null));
        RestResponse response = new RestResponse( user.getUsername());
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(), HttpStatus.OK);

    }

    //TODO:Need to remove this later from production
    @RequestMapping(value = "/createsuperuser" , method = RequestMethod.POST)
    ResponseEntity<?> addSuperUser() {

        Role role = new Role(true);
        role = roleRepository.save(role);
        List<String> roleIds = new ArrayList<String>();
        roleIds.add(role.getId());
        if(userRepository.findByUsername("superUser") == null){
            User user = userRepository.save(new User("superUser",
                    "superPassword",roleIds));
            RestResponse response = new RestResponse( user.getUsername());
            return new ResponseEntity<RestResponse>(response,  new HttpHeaders(), HttpStatus.OK);
        }
        RestError error = new RestError("Super user alrady exists",HttpStatus.NOT_MODIFIED);
        return new ResponseEntity<RestError>(error,  new HttpHeaders(), HttpStatus.OK);
    }


    @PreAuthorize("hasAuthority('DELETE_USER')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<RestResponse> delete(@PathVariable String id) {
        long res = userRepository.deleteById(id);
        RestResponse response = new RestResponse( res);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }

    @PreAuthorize("hasPriviledge('READ_USER')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<User> companies = userRepository.findAll();
        if (companies.isEmpty()) {
            RestError restError = new RestError("No Users found", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        RestResponse response = new RestResponse( companies);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
        User user = userRepository.findById(id);
        if (user == null) {
            RestError restError = new RestError("User With: "+ id + " does not exist", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());

        }
        RestResponse response = new RestResponse(user);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);

    }
}
