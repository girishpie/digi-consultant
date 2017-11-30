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
	private String objective;
	private Date date;
	private String meetingCommenced;
	private String meetingAdjourned;
	private String meetingNo;
	private List<String> attendees = new ArrayList<String>();
	private List<String> absentees = new ArrayList<String>(); 
	private List<DiscussionItem> discussionItems = new ArrayList<DiscussionItem>(); 
	private List<DiscussionItem> discussedItems = new ArrayList<DiscussionItem>(); 
	private List<Agenda> agenda = new ArrayList<Agenda>();
	
	public Mom() {
		
	}
	public Mom(String title, String objective, Date date, String meetingCommenced, String meetingAdjourned,
			String meetingNo, List<String> attendees, List<String> absentees, List<DiscussionItem> discussionItems,
			List<DiscussionItem> discussedItems, List<Agenda> agenda) {
		this.title = title;
		this.objective = objective;
		this.date = date;
		this.meetingCommenced = meetingCommenced;
		this.meetingAdjourned = meetingAdjourned;
		this.meetingNo = meetingNo;
		this.attendees = attendees;
		this.absentees = absentees;
		this.discussionItems = discussionItems;
		this.discussedItems = discussedItems;
		this.agenda = agenda;
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

	public String getObjective() {
		return objective;
	}

	public void setObjective(String objective) {
		this.objective = objective;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getMeetingCommenced() {
		return meetingCommenced;
	}

	public void setMeetingCommenced(String meetingCommenced) {
		this.meetingCommenced = meetingCommenced;
	}

	public String getMeetingAdjourned() {
		return meetingAdjourned;
	}

	public void setMeetingAdjourned(String meetingAdjourned) {
		this.meetingAdjourned = meetingAdjourned;
	}

	public String getMeetingNo() {
		return meetingNo;
	}

	public void setMeetingNo(String meetingNo) {
		this.meetingNo = meetingNo;
	}

	public List<String> getAttendees() {
		return attendees;
	}

	public void setAttendees(List<String> attendees) {
		this.attendees = attendees;
	}

	public List<String> getAbsentees() {
		return absentees;
	}

	public void setAbsentees(List<String> absentees) {
		this.absentees = absentees;
	}

	public List<DiscussionItem> getDiscussionItems() {
		return discussionItems;
	}

	public void setDiscussionItems(List<DiscussionItem> discussionItems) {
		this.discussionItems = discussionItems;
	}

	public List<DiscussionItem> getDiscussedItems() {
		return discussedItems;
	}

	public void setDiscussedItems(List<DiscussionItem> discussedItems) {
		this.discussedItems = discussedItems;
	}

	public List<Agenda> getAgenda() {
		return agenda;
	}

	public void setAgenda(List<Agenda> agenda) {
		this.agenda = agenda;
	} 

	
	
}
