package application.department;

import application.common.BasicInfo;
import application.company.Company;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/27/2017.
 */
public class Department extends BasicInfo {

    @Id
    private String id;
    @NotNull
    private String name;
    @NotNull
    private String companyId;
    
    private List<String> employeeIds = new ArrayList<String>();
    
    public Department() {

    }

    public  Department(String name, String companyId){
        this.name = name;
        this.companyId = companyId;
    }

    public String getId(){
        return this.id;
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

    public String getCompanyId() {
        return companyId;
    }

    public void setCompanyId(String companyId) {
        this.companyId = companyId;
    }

	public void addEmployee(String id2) {
		this.employeeIds.add(id2);
		
	}

	public void deleteEmployee(String id2) {
		for (int i = 0; i < this.employeeIds.size(); i++) {
            if (this.employeeIds.get(i) == id2) {
                this.employeeIds.remove(i);
            }
        }
	}
}

