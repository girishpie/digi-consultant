package application.employee;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EmployeeDto {

	private String id;
	private String firstname;
	private String lastname;
	private String email;
	private String companyName;
	private Date DOB; 
	private String gender;
	private String role;
	private String address;
	private String city;
	private String country;
	private String mobile;
	private String telephone; 
	private List<String> projectIds = new ArrayList<String>();
	private int noOfProjects ;
	
	public EmployeeDto() {}
	
	public EmployeeDto(Employee employee, String name) {
		this.id = employee.getId();
		this.firstname = employee.getFirstname();
		this.email = employee.getEmail();
		this.lastname = employee.getLastname();
		this.companyName = name;
		this.DOB = employee.getDOB();
		this.gender = employee.getGender();
		this.role = employee.getRole();
		this.address = employee.getAddress();
		this.city = employee.getCity();
		this.country = employee.getCountry();
		this.mobile = employee.getMobile();
		this.telephone = employee.getTelephone();
		this.projectIds = employee.getProjectIds();
		this.noOfProjects = this.projectIds.size();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return firstname;
	}

	public void setName(String name) {
		this.firstname = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
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

	public int getNoOfProjects() {
		return noOfProjects;
	}

	public void setNoOfProjects(int noOfProjects) {
		this.noOfProjects = noOfProjects;
	}
}
