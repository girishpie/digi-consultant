package application.office;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document
public class Office {

    @Id
    private String id;
    @NotNull
    private String address;
    @NotNull
    private int tel;
    private int fax;
    private String companyId;

    public Office() {

    }

    public  Office(String address, int tel, int fax, String companyId){
        this.address = address;
        this.tel = tel;
        this.fax = fax;
        this.companyId = companyId;
    }

    public String getId(){
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getTel() {
        return this.tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public int getFax() {
        return this.fax;
    }

    public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public void setFax(int fax) {
        this.fax = fax;
    }

  
}

