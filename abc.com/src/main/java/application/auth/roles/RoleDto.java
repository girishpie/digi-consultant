package application.auth.roles;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;

public class RoleDto {

    @Id
    private String id;
    private String name;
    private List<PermissionType> permissions = new ArrayList<PermissionType>();
    private String lastUpadated;
    
    public RoleDto() {
    	
    }
    
	public RoleDto(Role role) {
		this.id = role.getId();
		this.name = role.getName();
		this.permissions = role.getPermissions();
		this.lastUpadated = role.getLastModifiedBy();		 
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<PermissionType> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<PermissionType> permissions) {
		this.permissions = permissions;
	}

	public String getLastUpadated() {
		return lastUpadated;
	}

	public void setLastUpadated(String lastUpadated) {
		this.lastUpadated = lastUpadated;
	}

}
