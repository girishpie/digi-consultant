package application.auth.user;

import application.audit.AuditAspect;
import application.auth.roles.PermissionType;
import application.auth.roles.Role;
import application.auth.roles.RoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
public class UserServiceImpl implements UserDetailsService {

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final RoleRepository roleRepository;

    private final Logger logger =  LoggerFactory.getLogger(UserServiceImpl.class);

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        List<User> users = userRepository.findAll();
        User user = userRepository.findByUsername(email);

        if(user !=null) {
            List<String> roleIds = user.getRoleIds();
            List <Role> roles = new ArrayList<Role>();
            int length = roleIds.size();
            List<Role> roless = roleRepository.findAll();
            for(int i= 0 ; i < length ; i++){
                String roleName = roleIds.get(i);
                Role role = roleRepository.findByName(roleName);
                roles.add(role);
            }

            UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                    user.getUsername(), user.getPassword(), true, true, true,
                    true, getAuthorities(roles));

            logger.info(userDetails.toString());
            return userDetails;

        }
        //throw user not found exception
      throw new UsernameNotFoundException(email);
    }

    private Collection<? extends GrantedAuthority> getAuthorities(
            Collection<Role> roles) {

        return getGrantedAuthorities(getPrivileges(roles));
    }

    private List<String> getPrivileges(Collection<Role> roles) {

        List<String> privileges = new ArrayList<>();
        List<PermissionType> collection = new ArrayList<>();
        for (Role role : roles) {
            collection.addAll(role.getPermissions());
        }
        for (PermissionType item : collection) {
            privileges.add(item.name());
        }
        return privileges;
    }

    private List<GrantedAuthority> getGrantedAuthorities(List<String> privileges) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (String privilege : privileges) {
            authorities.add(new SimpleGrantedAuthority(privilege));
        }
        return authorities;
    }
}