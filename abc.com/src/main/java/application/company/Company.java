package application.company;

import application.common.BasicInfo;

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
public class Company extends BasicInfo{

    @Id
    private String id;

    @NotNull
    private String companyName;
    private String address;


    private List<String> departmentIds = new ArrayList<String>();
    private List<String> clientIds = new ArrayList<String>();

    public Company() {}

    public Company(String companyName, String address) {
        this.companyName = companyName;
        this.address = address;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<String> getDepartmentIds() {
        return departmentIds;
    }

    public void setDepartmentIds(List<String> departmentIds) {
        this.departmentIds = departmentIds;
    }


	public List<String> getClientIds() {
		return clientIds;
	}

	public void setClientIds(List<String> clientIds) {
		this.clientIds = clientIds;
	}

    public void addDepartment(String departmentId){
        this.departmentIds.add(departmentId);
    }
    
    public void addClient(String clientIds){
        this.clientIds.add(clientIds);
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

	public void deleteClient(String id2) {
		for (int i = 0; i < this.clientIds.size(); i++) {
            if (this.clientIds.get(i) == id) {
                this.clientIds.remove(i);
            }
        }
		
	}

}