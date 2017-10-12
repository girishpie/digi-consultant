package application.BoQDepartment;

public class BoQDepartmentDto {
	
	private String id;
	private String boqDepartmentName;
	private String projectName;
	
	public BoQDepartmentDto(BoQDepartment boqDepartment, String projectName) {
		this.id = boqDepartment.getId();
		this.boqDepartmentName = boqDepartment.getDepartmentName();
		this.projectName =projectName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBoqDepartmentName() {
		return boqDepartmentName;
	}

	public void setBoqDepartmentName(String boqDepartmentName) {
		this.boqDepartmentName = boqDepartmentName;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

}
