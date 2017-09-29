package application.audit;

import org.springframework.data.annotation.Id;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Date;

/**
 * Created by gipai on 9/29/2017.
 */
public class Audit {

    @Id
    private String id;
    private String userName;
    private ActionType actionType;
    private ArtifactType artifactType;
    private Date   date;
    private String artifactName;

    public Audit(ActionType actionType, ArtifactType artifactType, ArtifactInfo info){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        this.userName = auth.getName();
        this.actionType = actionType;
        this.artifactType = artifactType;
        this.date = new Date();
        this.artifactName = info.getName();
    }

    public String getArtifactName() {
        return artifactName;
    }

    public void setArtifactName(String artifactName) {
        this.artifactName = artifactName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ActionType getActionType() {
        return actionType;
    }

    public void setActionType(ActionType actionType) {
        this.actionType = actionType;
    }

    public ArtifactType getArtifactType() {
        return artifactType;
    }

    public void setArtifactType(ArtifactType artifactType) {
        this.artifactType = artifactType;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

}
