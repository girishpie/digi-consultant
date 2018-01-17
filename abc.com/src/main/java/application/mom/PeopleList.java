package application.mom;

import java.util.ArrayList;
import java.util.List;

import application.employee.Employee;

public class PeopleList {

	private List<Employee> attendees = new ArrayList<Employee>();
	private String reference;
	private Boolean present;
	private Boolean absent;
	private Boolean distributionList;
	private Boolean apologised;
	public List<Employee> getAttendees() {
		return attendees;
	}
	public void setAttendees(List<Employee> attendees) {
		this.attendees = attendees;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public Boolean getPresent() {
		return present;
	}
	public void setPresent(Boolean present) {
		this.present = present;
	}
	public Boolean getAbsent() {
		return absent;
	}
	public void setAbsent(Boolean absent) {
		this.absent = absent;
	}
	public Boolean getDistributionList() {
		return distributionList;
	}
	public void setDistributionList(Boolean distributionList) {
		this.distributionList = distributionList;
	}
	public Boolean getApologised() {
		return apologised;
	}
	public void setApologised(Boolean apologised) {
		this.apologised = apologised;
	}
	
	
}
