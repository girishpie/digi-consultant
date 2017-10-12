package application.BoQDepartment;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class BoQDepartment extends BasicInfo {
	
	@Id
    private String id;
	
	@NotNull
	private String departmentName;
	private String projectId;
	private List<String> boQs = new ArrayList<String>();
	
	public BoQDepartment(String departmentName, String projectId) {
		
		this.departmentName = departmentName;
		this.projectId = projectId;
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
	public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	public void addBoQ(String id2) {
		  this.boQs.add(id2);		
	}
	public void deleteBoQ(String id2) {
		for (int i = 0; i < this.boQs.size(); i++) {
            if (this.boQs.get(i) == id2) {
                this.boQs.remove(i);
            }
        }
	}
	
}
