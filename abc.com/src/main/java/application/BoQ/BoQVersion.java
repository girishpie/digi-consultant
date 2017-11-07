package application.BoQ;
import java.util.Date;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class BoQVersion {
	
	    private int versionNumber;
	    private String boQId;
	    private String createdBy;
	    private Date creationDate;

	    public BoQVersion(){
	        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	        createdBy = auth.getName();
	        creationDate = new Date();
	    }

	    public int getVersionNumber() {
	        return versionNumber;
	    }

	    public void setVersionNumber(int versionNumber) {
	        this.versionNumber = versionNumber;
	    }

	    public String getBoQId() {
	        return boQId;
	    }

	    public void setBoQId(String boQId) {
	        this.boQId = boQId;
	    }

	    public String getCreatedBy() {
	        return createdBy;
	    }

	    public void setCreatedBy(String createdBy) {
	        this.createdBy = createdBy;
	    }

	    public Date getCreationDate() {
	        return creationDate;
	    }

	    public void setCreationDate(Date creationDate) {
	        this.creationDate = creationDate;
	    }
	}
