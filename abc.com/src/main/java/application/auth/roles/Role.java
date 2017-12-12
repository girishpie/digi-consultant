package application.auth.roles;

import org.springframework.data.annotation.Id;

import application.common.BasicInfo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
public class Role extends BasicInfo {

    @Id
    private String id;
    private String name;
    private List<PermissionType> permissions = new ArrayList<PermissionType>();

    public Role(){

    }

    public Role(boolean isSuperUser){
        if(isSuperUser){
            this.permissions.add(PermissionType.CREATE_USER);
            this.permissions.add(PermissionType.DELETE_USER);
            this.permissions.add(PermissionType.READ_USER);
            this.permissions.add(PermissionType.UPDATE_USER);

            this.permissions.add(PermissionType.CREATE_ROLE);
            this.permissions.add(PermissionType.DELETE_ROLE);
            this.permissions.add(PermissionType.READ_ROLE);
            this.permissions.add(PermissionType.UPDATE_ROLE);
        }
    }

    public Role(String name,List<PermissionType> permissions){
        this.name = name;
        this.permissions = permissions;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<PermissionType> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<PermissionType> permissions) {
        this.permissions = permissions;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean addPermission(PermissionType permission) {
        int length = permissions.size();
        for(int i=0; i < length; i++){
            if(permissions.get(i) == permission){
                //return as already exists
                return false;
            }
        }
        permissions.add(permission);
        return true;
    }

    public boolean deletePermission(PermissionType permission) {
        int length = permissions.size();
        for(int i=0; i < length; i++){
            if(permissions.get(i) == permission){
                permissions.remove(i);
                return true;
            }
        }
        return false;
    }



}
