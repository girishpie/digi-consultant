package application.category;

import java.util.ArrayList;
import java.util.List;

public class CategoryDto {
	
	private String id; 
	private String name;
	private String description;
	private List<String> subCatNames = new ArrayList<String>();
	private String parentName;
	
	public CategoryDto(String id, String name, String description, List<String> subCatNames) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.subCatNames = subCatNames;
	}

	public CategoryDto() {
		// TODO Auto-generated constructor stub
	}

	public CategoryDto(String name2, String description2, String name3) {
		this.name  = name2;
		this.description = description2;
		this.parentName = name3;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getSubCatNames() {
		return subCatNames;
	}

	public void setSubCatNames(List<String> subCatNames) {
		this.subCatNames = subCatNames;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	
	
}
