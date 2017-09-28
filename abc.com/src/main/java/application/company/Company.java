package application.company;

/**
 * Created by gipai on 9/26/2017.
 */

import application.department.Department;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Document
public class Company {

    @Id
    public String id;

    @NotNull
    public String companyName;
    public String address;


    private List<String> departmentIds = new ArrayList<String>();

    public Company() {}

    public Company(String companyName, String address) {
        this.companyName = companyName;
        this.address = address;
    }

    public void addDepartment(String departmentId){
        this.departmentIds.add(departmentId);
    }

    public String getId(){
        return this.id;
    }

    public void deleteDepartment(String id) {
        for (int i = 0; i < this.departmentIds.size(); i++) {
            if (this.departmentIds.get(i) == id) {
                this.departmentIds.remove(i);
            }
        }
    }

}