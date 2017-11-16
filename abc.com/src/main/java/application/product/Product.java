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
	private String bimId;
	private double amount;
	private String unit; 
	private String description;
	private String productCatId;
	private String productSubCatId;
	private String sectionId;
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product( String name, int quantity, String bimId, double amount, String unit,
			 String sectionId, String description, String productCatId) {
		this.name = name;
		this.quantity = quantity;
		this.bimId = bimId;
		this.amount = amount;
		this.unit = unit;
		this.productCatId = productCatId;
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
	public String getBimId() {
		return bimId;
	}
	public void setBimId(String bimId) {
		this.bimId = bimId;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getProductCatId() {
		return productCatId;
	}
	public void setProductCatId(String productCatId) {
		this.productCatId = productCatId;
	}
	public String getProductSubCatId() {
		return productSubCatId;
	}
	public void setProductSubCatId(String productSubCatId) {
		this.productSubCatId = productSubCatId;
	}
	
}
