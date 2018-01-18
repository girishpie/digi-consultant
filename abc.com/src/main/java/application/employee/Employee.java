package application.employee;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Employee extends BasicInfo{
	
	@Id
	private String id;
	private String firstname;
	private String lastname;
	private Date DOB; 
	private String gender;
	private String role;
	private String email;
	private String address;
	private String city;
	private String country;
	private String mobile;
	private String telephone; 
	private String companyId;
	private List<String> projectIds = new ArrayList<String>(); 
	
	public Employee() {};
	
	public Employee(String firstname, String lastname, Date dOB, String gender, String role, String email,
			String address, String city, String country, String mobile, String telephone, String companyId, List<String> projectIds ) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.DOB = dOB;
		this.gender = gender;
		this.role = role;
		this.email = email;
		this.address = address;
		this.city = city;
		this.country = country;
		this.mobile = mobile;
		this.telephone = telephone;
		this.companyId = companyId;
		this.projectIds = projectIds;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String name) {
		this.firstname = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Date getDOB() {
		return DOB;
	}

	public void setDOB(Date dOB) {
		DOB = dOB;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public List<String> getProjectIds() {
		return projectIds;
	}

	public void setProjectIds(List<String> projectIds) {
		this.projectIds = projectIds;
	}
	
	public void addProject(String projectId) {
		this.projectIds.add(projectId);
	}
	
	public void deleteProject(String projectId) {
		this.projectIds.remove(projectId);
	}
	

}
