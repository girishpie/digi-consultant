package application.project;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
	@NotNull
	private String jobNumber;
	private String phase;
	private String siteAddress;
	private String description;
	private Date startDate;
	@NotNull
	private String clientId;
	private List<String> boqDepartmentIds = new ArrayList<String>();
	private List<String> crIds = new ArrayList<String>();
	private List<String> meetingIds = new ArrayList<String>();
	private List<String> employeeIds = new ArrayList<String>();
	
	public Project() {
		
	}
	
	public Project(String projectName, String jobNumber, String siteAddress, String description,
			Date startDate, String clientId, String phase) {
		
		this.projectName = projectName;
		this.jobNumber = jobNumber;
		this.siteAddress = siteAddress;
		this.description = description;
		this.startDate = startDate;
		this.clientId = clientId;
		this.phase = phase;
		
	}
	
	public List<String> getBoqDepartmentIds() {
		return boqDepartmentIds;
	}

	public void setBoqDepartmentIds(List<String> boqDepartmentIds) {
		this.boqDepartmentIds = boqDepartmentIds;
	}

	public List<String> getCrIds() {
		return crIds;
	}

	public void setCrIds(List<String> crIds) {
		this.crIds = crIds;
	}

	public List<String> getMeetingIds() {
		return meetingIds;
	}

	public void setMeetingIds(List<String> meetingIds) {
		this.meetingIds = meetingIds;
	}

	public List<String> getEmployeeIds() {
		return employeeIds;
	}

	public void setEmployeeIds(List<String> employeeIds) {
		this.employeeIds = employeeIds;
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

	public void addBoQDepartment(String id2) {
		this.boqDepartmentIds.add(id2);
	}

	public void deleteBoQDepartment(String id2) {
		for (int i = 0; i < this.boqDepartmentIds.size(); i++) {
            if (this.boqDepartmentIds.get(i) == id2) {
                this.boqDepartmentIds.remove(i);
            }
        }
	}

	public String getPhase() {
		return phase;
	}

	public void setPhase(String phase) {
		this.phase = phase;
	}

	public void addCR(String id2) {
		this.crIds.add(id2);		
	}
	
	public void deleteCR(String id2) {
		for (int i = 0; i < this.crIds.size(); i++) {
            if (this.crIds.get(i) == id2) {
                this.crIds.remove(i);
            }
        }
	}

	public void addMeeting(String id2) {
		this.meetingIds.add(id2);
		
	}
	
	public void deleteMeeting(String id2) {
		for (int i = 0; i < this.meetingIds.size(); i++) {
            if (this.meetingIds.get(i) == id2) {
                this.meetingIds.remove(i);
            }
        }
	}
	
	
}
