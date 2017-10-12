package application.BoQ;

import java.util.ArrayList;
import java.util.List;

public class BoQDto {

    private String id;
	private String departmentName;
	private List<String> sectionIds = new ArrayList<String>();
	private String version;
	private int totalVersions;

	public BoQDto(BoQ boQ, String departmentName) {
		this.id = boQ.getId();
		this.departmentName = departmentName;
		this.sectionIds = boQ.getSectionIds();
		this.version = boQ.getVersion();
		this.totalVersions = boQ.getTotalVersions();
		
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDepartmentName() {
		return departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public List<String> getSectionIds() {
		return sectionIds;
	}

	public void setSectionIds(List<String> sectionIds) {
		this.sectionIds = sectionIds;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public int getTotalVersions() {
		return totalVersions;
	}

	public void setTotalVersions(int totalVersions) {
		this.totalVersions = totalVersions;
	}


}
