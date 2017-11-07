package application.product;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Product extends BasicInfo {
	@Id
	private String id;
	private String name;
	private int quantity;
	private double bimId;
	private double amount;
	private int totalVersions;
	private int unit; 
	private String description;
	private String productCat;
	private String productSubCat;
	private String sectionId;

	public Product( String name, int quantity, double bimId, double amount,int unit,
			String productCat, String productSubCat, String sectionId, String description) {
		this.name = name;
		this.quantity = quantity;
		this.bimId = bimId;
		this.amount = amount;
		this.unit = unit;
		this.productCat = productCat;
		this.productSubCat = productSubCat;
		this.sectionId = sectionId;
		this.description = description;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSectionId() {
		return sectionId;
	}

	public void setSectionId(String sectionId) {
		this.sectionId = sectionId;
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
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getBimId() {
		return bimId;
	}
	public void setBimId(double bimId) {
		this.bimId = bimId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public int getUnit() {
		return unit;
	}
	public void setUnit(int unit) {
		this.unit = unit;
	}
	public String getProductCat() {
		return productCat;
	}
	public void setProductCat(String productCat) {
		this.productCat = productCat;
	}
	public String getProductSubCat() {
		return productSubCat;
	}
	public void setProductSubCat(String productSubCat) {
		this.productSubCat = productSubCat;
	}
	
	
}
