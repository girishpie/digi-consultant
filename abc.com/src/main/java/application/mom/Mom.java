package application.mom;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import application.common.BasicInfo;

@Document
public class Mom  extends BasicInfo{
	
	@Id
	private String id;
	private String title;
	private String projectId;
	private String objective;
	private String meetingType;
	private Date date;
	private String meetingNo;
	private String venue;
	private List<PeopleList> pplList = new ArrayList<PeopleList>();
	private List<DiscussionItem> discussionItems = new ArrayList<DiscussionItem>(); 
	//private List<Agenda> agenda = new ArrayList<Agenda>();
	
	public Mom() {
		
	}
	public Mom(String title, String projectId, String objective, Date date, String venue, String meetingNo, 
			List<PeopleList> pplList, List<String> absentees, List<DiscussionItem> discussionItems) {
		this.title = title;
		this.projectId = projectId;
		this.objective = objective;
		this.date = date;
		this.venue = venue;
		this.meetingNo = meetingNo;
		this.pplList = pplList;
		this.discussionItems = discussionItems;
	
		//this.agenda = agenda;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getProjectId() {
		return projectId;
	}
	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}
	public String getObjective() {
		return objective;
	}

	public void setObjective(String objective) {
		this.objective = objective;
	}

	public Date getDate() {
		return date;
	}

	public String getMeetingType() {
		return meetingType;
	}
	public void setMeetingType(String meetingType) {
		this.meetingType = meetingType;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	public String getVenue() {
		return venue;
	}

	public void setVenue(String venue) {
		this.venue = venue;
	}

	public String getMeetingNo() {
		return meetingNo;
	}

	public void setMeetingNo(String meetingNo) {
		this.meetingNo = meetingNo;
	}

	public List<PeopleList> getPplList() {
		return pplList;
	}

	public void setPplList(List<PeopleList> attendees) {
		this.pplList = attendees;
	}

	public List<DiscussionItem> getDiscussionItems() {
		return discussionItems;
	}

	public void setDiscussionItems(List<DiscussionItem> discussionItems) {
		this.discussionItems = discussionItems;
	}

	
	public void addDiscussionItem(DiscussionItem parentItem,DiscussionItem newItem) {
		if(parentItem!= null) {
			parentItem.add(newItem);
		}else {
			//TODO: revisit when delete topic is possible
			String version = discussionItems.size() + ".0";
			newItem.setVersion(version);
			this.discussionItems.add(newItem);
		}
		
	}
	
}
