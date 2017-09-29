package application.auth.user;

import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
public class User  {
    @Id
    private String id;
    private String username;
    private String password;
    private  List<String> roleIds = new ArrayList<String>();

    public List<String> getRoleIds() {
        return roleIds;
    }

    public void setRoleIds(List<String> roleIds) {
        this.roleIds = roleIds;
    }

    public User(){

    }

    public User(String username, String password, List<String> roleIds) {
        this.username = username;
        this.password = password;
        this.roleIds = roleIds;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }




    public String getPassword() {
        return password;
    }


    public String getUsername() {
        return username;
    }


}
