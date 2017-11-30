package application.mom;

public class DiscussionItem {
	private double ItemNo;
	private String discussion;
	private String action;
	private String edit;
	
	public DiscussionItem() {
		
	}
	
	public DiscussionItem(double itemNo, String discussion, String action, String edit) {
		super();
		ItemNo = itemNo;
		this.discussion = discussion;
		this.action = action;
		this.edit = edit;
	}
	public double getItemNo() {
		return ItemNo;
	}
	public void setItemNo(double itemNo) {
		ItemNo = itemNo;
	}
	public String getDiscussion() {
		return discussion;
	}
	public void setDiscussion(String discussion) {
		this.discussion = discussion;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getEdit() {
		return edit;
	}
	public void setEdit(String edit) {
		this.edit = edit;
	}
	
}
