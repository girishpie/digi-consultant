package application.qualityControl;

public class ActivityLog {
	
	private String type;
	private String comments;
	
	public ActivityLog(String comments2, String type2) {
		this.type = type2;
		this.comments = comments2;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

}
