package application.auth.user;

import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import application.common.BasicInfo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
public class User extends BasicInfo {
	
    @Id
    private String id;
    private String userId;
	private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String password;
    
    private  List<String> roleIds = new ArrayList<String>();


    public User(){
    	super();
    }

    public User(String userId, String firstName, String lastName, String email, String phoneNumber, String password,
			List<String> roleIds) {

		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
		this.roleIds = roleIds;
	}

    public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
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

	public void setPassword(String password) {
		this.password = password;
	}
	
	public List<String> getRoleIds() {
        return roleIds;
    }

    public void setRoleIds(List<String> roleIds) {
        this.roleIds = roleIds;
    }


}
