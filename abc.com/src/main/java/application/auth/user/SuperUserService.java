package application.auth.user;

import application.auth.roles.Role;
import application.auth.roles.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * Created by gipai on 10/12/2017.
 */
@Component
public class SuperUserService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final RoleRepository roleRepository;

    public SuperUserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;

        Role superRole = this.roleRepository.findByName("superRole");
        if(superRole == null){
             superRole = new Role(true);
             superRole.setName("superRole");
            superRole = this.roleRepository.save(superRole);
        }
        User user = this.userRepository.findByUserId("superUser");
        if(user == null) {
            ArrayList<String> roles = new ArrayList<String>();
            roles.add(superRole.getId());

            user = new User("superUser", "super", "", "", "", "superPassword",
                    roles) ;
            this.userRepository.save(user);
        }
    }



}
