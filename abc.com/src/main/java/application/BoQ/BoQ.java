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
	private String version;
	private int totalVersions;
	
	
	public BoQ(String boqDepartmentId, List<String> sectionIds, String version) {
		this.boqDepartmentId = boqDepartmentId;
		this.sectionIds = sectionIds;
		this.version = version;
		this.totalVersions = 0;
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
