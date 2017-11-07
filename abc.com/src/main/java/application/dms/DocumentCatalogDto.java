package application.dms;

import java.util.Date;

public class DocumentCatalogDto {

	 private String id;
	 private String displayName;
	 private String projectName;
	 private String createdBy;
	 private int version;
	 private Date creationTime;
	 
	 
	public DocumentCatalogDto(DocumentCatalog documentCatalog, String projectName) {
		this.id = documentCatalog.getId();
		this.displayName = documentCatalog.getDisplayName();
		this.projectName = projectName;
		this.createdBy = documentCatalog.getCreatedBy();
		this.version = documentCatalog.getLatestVersion().getVersionNumber();
		this.creationTime = documentCatalog.getCreationTime();
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDisplayName() {
		return displayName;
	}
	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public int getVersion() {
		return version;
	}
	public void setVersion(int version) {
		this.version = version;
	}
	public Date getCreationTime() {
		return creationTime;
	}
	public void setCreationTime(Date creationTime) {
		this.creationTime = creationTime;
	}
	 
	 
}
