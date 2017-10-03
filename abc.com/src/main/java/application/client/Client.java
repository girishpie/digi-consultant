package application.client;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;

public class Client {
	
	@Id
	private String id;
	@NotNull
    private String name;
    @NotNull
    private String companyId;
    private String address;
    
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
	

}
