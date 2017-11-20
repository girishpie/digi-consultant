package application.qualityControl;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.category.Category;
import application.common.BasicInfo;

@Document
public class QualityControl extends BasicInfo  {
	
	@Id
	private String id;
	@NotNull
    private String changeId;
    @NotNull
    private String type;
    private String projectId;
    private List<String> distributionlist = new ArrayList<String>();
    private String assignee;
    private String status;
    private Date targetEnddate;
    private String shortDescription;
    private String detailedDescription;
    private String remarks;
    private Map<String,String> documentIds = new HashMap<String,String>();
    private List<ActivityLog> activilyLogs = new ArrayList<ActivityLog>();
    
    public QualityControl() {    	
    }
    
	public QualityControl(String changeId, String type, String projectId, List<String> distributionlist,
			String assignee, String status, Date targetEnddate, String shortDescription, String detailedDescription,
			String remarks, List<String> documentIds) {
		this.changeId = changeId;
		this.type = type;
		this.projectId = projectId;
		this.distributionlist = distributionlist;
		this.assignee = assignee;
		this.status = status;
		this.targetEnddate = targetEnddate;
		this.shortDescription = shortDescription;
		this.detailedDescription = detailedDescription;
		this.remarks = remarks;
		((List<String>) this.documentIds).addAll(documentIds);
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getChangeId() {
		return changeId;
	}

	public void setChangeId(String changeId) {
		this.changeId = changeId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getProjectId() {
		return projectId;
	}

	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public List<String> getDistributionlist() {
		return distributionlist;
	}

	public void setDistributionlist(List<String> distributionlist) {
		this.distributionlist = distributionlist;
	}

	public String getAssignee() {
		return assignee;
	}

	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getTargetEnddate() {
		return targetEnddate;
	}

	public void setTargetEnddate(Date targetEnddate) {
		this.targetEnddate = targetEnddate;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public String getDetailedDescription() {
		return detailedDescription;
	}

	public void setDetailedDescription(String detailedDescription) {
		this.detailedDescription = detailedDescription;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public List<ActivityLog> getActivilyLogs() {
		return activilyLogs;
	}

	public void setActivilyLogs(List<ActivityLog> activilyLogs) {
		this.activilyLogs = activilyLogs;
	}
	
	public void addActivityLog(String comments, String type) {
		this.activilyLogs.add(new ActivityLog(comments, type));
	}
	public void addDocumentId(String id, String name) {
		this.documentIds.put(id, name);
	}
}
