package application.section;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Section extends BasicInfo{

	    @Id
	    private String id;
	    private String sectionName;
	    private List<String> productIds = new ArrayList<String>();
	    private List<String> drawingIds = new ArrayList<String>();
	    private List<String> sectionIds = new ArrayList<String>();
	    private String specId;
	    private String boqId;
	    
	    
		public Section(String sectionName, String boqId) {
			this.sectionName = sectionName;
			this.boqId = boqId;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		public String getSectionName() {
			return sectionName;
		}
		public void setSectionName(String sectionName) {
			this.sectionName = sectionName;
		}
		public List<String> getProductIds() {
			return productIds;
		}
		public void setProductIds(List<String> productIds) {
			this.productIds = productIds;
		}
		public List<String> getDrawingIds() {
			return drawingIds;
		}
		public void setDrawingIds(List<String> drawingIds) {
			this.drawingIds = drawingIds;
		}
		public String getSpecId() {
			return specId;
		}
		public void setSpecId(String specId) {
			this.specId = specId;
		}
		public String getBoqId() {
			return boqId;
		}
		public void setBoqId(String boqId) {
			this.boqId = boqId;
		}
		public void deleteSection(String id2) {
			for (int i = 0; i < this.sectionIds.size(); i++) {
	            if (this.sectionIds.get(i) == id2) {
	                this.sectionIds.remove(i);
	            }
	        }	
			
		}
		public void addSection(String id2) {
			sectionIds.add(id2);
			
		}

}
