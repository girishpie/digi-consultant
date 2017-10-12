package application.employee;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Employee extends BasicInfo{
	
	@Id
	private String id;
	private String name;
	private String email;
	private String skypeId;
	private String departmentId;
	
	
	public Employee(String name, String email, String skypeId, String companyId) {
		this.name = name;
		this.email = email;
		this.skypeId = skypeId;
		this.departmentId = companyId;
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSkypeId() {
		return skypeId;
	}
	public void setSkypeId(String skypeId) {
		this.skypeId = skypeId;
	}
	public String getDepartmentId() {
		return departmentId;
	}
	public void setDepartmentId(String companyId) {
		this.departmentId = companyId;
	}
	

}
