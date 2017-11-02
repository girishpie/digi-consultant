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
	private String boQId ;
	
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
	public void setBoqId(String id2) {
		  this.boQId = id2;		
	}
	public String getBoQId() {
		return this.boQId;
	}

	
}
