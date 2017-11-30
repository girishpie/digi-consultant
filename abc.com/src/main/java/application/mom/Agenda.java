package application.mom;

public class Agenda {
	private String time;
	private String item;
	private String typeOfAction;
	private boolean dicisionRequired;
	
	public Agenda() {
		
	}
	
	public Agenda(String time, String item, String typeOfAction, boolean dicisionRequired) {
		super();
		this.time = time;
		this.item = item;
		this.typeOfAction = typeOfAction;
		this.dicisionRequired = dicisionRequired;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getTypeOfAction() {
		return typeOfAction;
	}
	public void setTypeOfAction(String typeOfAction) {
		this.typeOfAction = typeOfAction;
	}
	public boolean isDicisionRequired() {
		return dicisionRequired;
	}
	public void setDicisionRequired(boolean dicisionRequired) {
		this.dicisionRequired = dicisionRequired;
	}
	
	

}
