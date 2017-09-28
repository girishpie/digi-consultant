package application.department;

import application.company.Company;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Created by gipai on 9/27/2017.
 */
public class Department {

    @Id
    public String id;

    @NotNull
    public String name;

    @NotNull
    public String companyId;

    public Department() {

    }

    public  Department(String name, String companyId){
        this.name = name;
        this.companyId = companyId;
    }

    public String getId(){
        return this.id;
    }



}

