package application.client;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;

import application.common.BasicInfo;

public class Client extends BasicInfo  {
	
	@Id
	private String id;
	@NotNull
    private String name;
    @NotNull
    private String companyId;
    private String address;
    private List<String> projectIds = new ArrayList<String>();
    
    public Client() {

    }

    public  Client(String name, String companyId, String address){
        this.name = name;
        this.companyId = companyId;
        this.address = address;
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
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public void addProject(String id2) {
		this.projectIds.add(id2);
		
	}

	public void deleteProject(String id2) {
		for (int i = 0; i < this.projectIds.size(); i++) {
            if (this.projectIds.get(i) == id2) {
                this.projectIds.remove(i);
            }
        }
		
	}
	

}
