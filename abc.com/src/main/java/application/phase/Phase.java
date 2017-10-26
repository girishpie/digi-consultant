package application.phase;

import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Phase  extends BasicInfo{
	
	@Id
	private String id;
	@NotNull
    private String name;
	
	public Phase() {
		
	}
	
	public Phase(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
