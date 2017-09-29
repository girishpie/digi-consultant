package application.auth.roles;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/28/2017.
 */
public class Role {

    @Id
    private String id;
    private String name;


    private List<PermissionType> permissions = new ArrayList<PermissionType>();

    public Role(){

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
