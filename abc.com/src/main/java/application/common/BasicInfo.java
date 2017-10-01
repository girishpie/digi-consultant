package application.common;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Date;

/**
 * Created by gipai on 9/30/2017.
 */
public class BasicInfo {
    private String createdBy;
    private String lastModifiedBy;
    private Date creationTime;
    private Date lastModifiedTime;

    public BasicInfo() {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        createdBy = auth.getName();
        lastModifiedBy =  auth.getName();
        creationTime = new Date();
        lastModifiedTime= new Date();
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public Date getLastModifiedTime() {
        return lastModifiedTime;
    }

    public void setLastModifiedTime(Date lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
    }

    public void update(){
        lastModifiedTime= new Date();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        lastModifiedBy = auth.getName();
    }

}
