package application.client;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ClientDto {
	private String id;
	private String name;
	private String companyName;
	private String address;
	 private List<String> projectNames = new ArrayList<String>();
	
	public ClientDto(Client client, String companyName, List<String> projectNames) {
		this.id = client.getId();
		this.name = client.getName();
		this.address = client.getAddress();
		this.companyName = companyName;
		this.projectNames = projectNames;
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

	public List<String> getProjectNames() {
		return projectNames;
	}

	public void setProjectNames(List<String> projectNames) {
		this.projectNames = projectNames;
	}

}
