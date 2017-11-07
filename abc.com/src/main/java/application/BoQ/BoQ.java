package application.BoQ;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class BoQ extends BasicInfo{
	@Id
    private String id;
	
	@NotNull
	private String boqDepartmentId;
	private List<String> sectionIds = new ArrayList<String>();
	private List<BoQVersion> versions = new ArrayList<BoQVersion>();
	private String parentBoQId;
	
	public BoQ(String boqDepartmentId) {
		this.boqDepartmentId = boqDepartmentId;
	}

	public BoQ() {
		// TODO Auto-generated constructor stub
	}

	public String getParentBoQId() {
		return parentBoQId;
	}

	public void setParentBoQId(String parentBoQId) {
		this.parentBoQId = parentBoQId;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBoqDepartmentId() {
		return boqDepartmentId;
	}
	public void setBoqDepartmentId(String boqDepartmentId) {
		this.boqDepartmentId = boqDepartmentId;
	}
	public List<String> getSectionIds() {
        return sectionIds;
    }

    public void setSectionIds(List<String> sectionIds) {
        this.sectionIds = sectionIds;
    }
    public List<BoQVersion> getVersions() {
        return versions;
    }

    public void setVersions(List<BoQVersion> versions) {
        this.versions = versions;
    }

    public void addVersion(BoQVersion version){
        versions.add(version);
    }

    public boolean deleteVersion(int versionId){
        for(int i= 0 ; i< versions.size(); i++ ){
            if(versions.get(i).getVersionNumber() == versionId){
                versions.remove(i);
                return true;
            }
        }
        return false;
    }

    public BoQVersion getLatestVersion() {
        return versions.get(versions.size()-1);
    }


    public BoQVersion getVersion(int versionId){
        for(int i= 0 ; i< versions.size(); i++ ){
            if(versions.get(i).getVersionNumber() == versionId){
                return versions.get(i);
            }
        }
        return null;
    }

	public void addSection(String id2) {
		this.sectionIds.add(id2);
		
	}

	public void deleteSection(String id2) {
		for (int i = 0; i < this.sectionIds.size(); i++) {
            if (this.sectionIds.get(i) == id2) {
                this.sectionIds.remove(i);
            }
        }	
		
	}
	
}
