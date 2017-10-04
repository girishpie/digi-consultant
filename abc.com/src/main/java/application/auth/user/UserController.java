package application.auth.user;

import application.company.Company;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import application.auth.roles.Role;
import application.auth.roles.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.expression.Lists;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final RoleRepository roleRepository;

    public UserController(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_USER')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@RequestBody User input) {
        if(input.getUsername()== null || input.getUsername().isEmpty()){
            return ResponseWrapper.getResponse( new RestError( "User name can not be null or empty", HttpStatus.BAD_REQUEST));
        }
        if(userRepository.findByUsername(input.getUsername())!= null) {
            return ResponseWrapper.getResponse( new RestError( "User with same id can not be created", HttpStatus.BAD_REQUEST));

        }
        User user = userRepository.save(input);
        return ResponseWrapper.getResponse( new RestResponse( user.getUsername()));

    }

    //TODO:Need to remove this later from production
    @RequestMapping(value = "/createsuperuser" , method = RequestMethod.POST)
    ResponseEntity<IResponse> addSuperUser() {

        Role role = new Role(true);
        role = roleRepository.save(role);
        List<String> roleIds = new ArrayList<String>();
        roleIds.add(role.getId());
        if(userRepository.findByUsername("superUser") == null){
            User user = userRepository.save(new User("superUser",
                    "superPassword",roleIds));
            return ResponseWrapper.getResponse(new RestResponse( user.getUsername()));

        }
        return ResponseWrapper.getResponse( new RestError("Super user alrady exists",HttpStatus.NOT_MODIFIED));

    }


    @PreAuthorize("hasAuthority('DELETE_USER')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
        long res = userRepository.deleteById(id);
        return ResponseWrapper.getResponse( new RestResponse( res));
     }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll() {
        List<User> companies = userRepository.findAll();
        if (companies.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No Users found", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse( companies));

    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(params = { "pageNumber", "size" } , method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll(@RequestParam( "pageNumber" ) int pageNumber, @RequestParam( "size" ) int size) {
        Pageable pageable = new PageRequest(pageNumber, size); //get 5 profiles on a page
        Page<User> page = userRepository.findAll(pageable);

        List<User> users = page.getContent();
        if (users.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No Users found", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse( users));

    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<IResponse> get(@PathVariable("id") String id) {
        User user = userRepository.findById(id);
        if (user == null) {
            return ResponseWrapper.getResponse( new RestError("User With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse(user));
    }


}
