package application.audit;

/**
 * Created by gipai on 9/29/2017.
 */
public class ArtifactInfo {
    private String name;

    public ArtifactInfo(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setCompanyName(String name) {
        this.name = name;
    }
}
