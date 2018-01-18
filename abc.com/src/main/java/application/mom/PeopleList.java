package application.mom;

public class PeopleList {

	enum STATE{
		PRESENT,
		ABSENT,
		APOLOGIZED
	}

	private String employeeId;
	private String reference; // what is this?
	private STATE state;
	private Boolean isPartOfDL;
	
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public STATE getState() {
		return state;
	}
	public void setState(STATE state) {
		this.state = state;
	}
	
	public Boolean getIsPartOfDL() {
		return isPartOfDL;
	}
	
	public void setv(Boolean isPartOfDL) {
		this.isPartOfDL = isPartOfDL;
	}
	
	
	
	
	
}
