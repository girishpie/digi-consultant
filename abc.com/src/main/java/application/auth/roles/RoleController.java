package application.auth.roles;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
@RestController
@RequestMapping("/api/role")
public class RoleController {

    @Autowired
    private final RoleRepository roleRepository;

    public RoleController(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_ROLE')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<RestResponse> add(@RequestBody Role input) {
        Role role = roleRepository.save(new Role(input.getName(),input.getPermissions()));
        RestResponse response = new RestResponse( role.getId());
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(), HttpStatus.OK);

    }
    
    @PreAuthorize("hasAuthority('DELETE_ROLE')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
        long res = roleRepository.deleteById(id);
        return ResponseWrapper.getResponse( new RestResponse( id));
     }

    //Update Specific role
    @PreAuthorize("hasAuthority('UPDATE_ROLE')")
    @RequestMapping(value = "/{roleId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String roleId, @RequestBody Role input){
    	Role role = roleRepository.findById(roleId);
        if(role == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as role with id " + roleId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        role.setName(input.getName());
        role.setPermissions(input.getPermissions());
        role.update();
        role = roleRepository.save(role);
        return ResponseWrapper.getResponse(new RestResponse(role));
    }
    
    @PreAuthorize("hasAuthority('READ_ROLE')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> listAllRoles() {
        List<Role> roles = roleRepository.findAll();
        if (roles.isEmpty()) {
            RestError restError = new RestError("No Roles found", HttpStatus.NOT_FOUND);
            return new ResponseEntity<Object>(restError, new HttpHeaders(), restError.getStatus());
        }
        List<RoleDto> roleDtos = new ArrayList<RoleDto>();
        for(int i = 0; i < roles.size(); i++ ) { 
        	roleDtos.add(new RoleDto(roles.get(i)));
        }
        RestResponse response = new RestResponse( roleDtos);
        return new ResponseEntity<RestResponse>(response,  new HttpHeaders(),HttpStatus.OK);
    }
    
    @PreAuthorize("hasAuthority('READ_ROLE')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
        Role role = roleRepository.findById(id);
        if (role == null) {
        	return ResponseWrapper.getResponse( new RestError("Role With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse(new RoleDto(role)));
    }
}
