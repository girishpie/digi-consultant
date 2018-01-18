package application.mom;

import java.util.ArrayList;
import java.util.List;

public class DiscussionItem {
	private String version;
	private String discussion;
	private String action;
	private String edit;
	private List<DiscussionItem> discussionItems = new ArrayList<DiscussionItem>(); 
	
	public DiscussionItem() {
		
	}
	
	public DiscussionItem(String version, String discussion, String action, String edit) {
		super();
		this.version = version;
		this.discussion = discussion;
		this.action = action;
		this.edit = edit;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
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
	
	public void add(DiscussionItem item) {
		String[]  versions = version.split(".");
		//TODO: revisit when delete topic is possible
		String version = versions[0] + "." + discussionItems.size();
		item.setVersion(version);
		this.discussionItems.add(item);
	}
}
