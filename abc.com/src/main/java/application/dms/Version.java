package application.dms;

import application.common.BasicInfo;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Date;

/**
 * Created by gipai on 9/30/2017.
 */
public class Version  {
    private int versionNumber;
    private String fileStoreId;
    private String createdBy;
    private Date creationDate;

    public Version(){
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

    public String getFileStoreId() {
        return fileStoreId;
    }

    public void setFileStoreId(String fileStoreId) {
        this.fileStoreId = fileStoreId;
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
