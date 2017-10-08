package application.project;

import java.util.Date;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Project extends BasicInfo {

	@Id
    private String id;
	
	
	@NotNull
	private String projectName;
	private String jobNumber;
	private String siteAddress;
	private String description;
	private Date startDate;
	@NotNull
	private String clientId;
	
	
	public Project() {
		
	}
	
	public Project(String projectName, String jobNumber, String siteAddress, String description,
			Date startDate, String clientId) {
		super();
		this.id = id;
		this.projectName = projectName;
		this.jobNumber = jobNumber;
		this.siteAddress = siteAddress;
		this.description = description;
		this.startDate = startDate;
		this.clientId = clientId;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getJobNumber() {
		return jobNumber;
	}
	public void setJobNumber(String jobNumber) {
		this.jobNumber = jobNumber;
	}
	public String getSiteAddress() {
		return siteAddress;
	}
	public void setSiteAddress(String siteAddress) {
		this.siteAddress = siteAddress;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public String getClientId() {
		return clientId;
	}
	public void setClientId(String clientId) {
		this.clientId = clientId;
	}
}
