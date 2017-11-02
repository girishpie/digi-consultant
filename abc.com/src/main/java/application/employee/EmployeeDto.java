package application.employee;

public class EmployeeDto {

	private String id;
	private String name;
	private String email;
	private String skypeId;
	private String companyName;
	
	public EmployeeDto(Employee employee, String name) {
		this.id = employee.getId();
		this.name = employee.getName();
		this.email = employee.getEmail();
		this.skypeId = employee.getSkypeId();
		this.companyName = name;
		
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

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

}
