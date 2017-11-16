package application.product;

public class ProductDto {
	private String id;
	private String name;
	private int quantity;
	private String bimId;
	private double amount;
	private String unit; 
	private String description;
	private String productCatName;
	//private String productSubCatName;
	private String sectionName;
	
	public ProductDto(Product product, String sectionName, String productCat) {
		this.id = product.getId();
		this.name = product.getName();
		this.quantity = product.getQuantity();
		this.bimId = product.getBimId();
		this.amount = product.getAmount();
		this.unit = product.getUnit();
		this.description = product.getDescription();
		this.productCatName = productCat;
		//this.productSubCatName = productSubCat;
		this.sectionName = sectionName;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProductCatName() {
		return productCatName;
	}

	public void setProductCatName(String productCatName) {
		this.productCatName = productCatName;
	}

//	public String getProductSubCatName() {
//		return productSubCatName;
//	}
//
//	public void setProductSubCatName(String productSubCatName) {
//		this.productSubCatName = productSubCatName;
//	}

	public String getSectionName() {
		return sectionName;
	}

	public void setSectionName(String sectionName) {
		this.sectionName = sectionName;
	}
	
	
}
