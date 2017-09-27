package application.company;

/**
 * Created by gipai on 9/26/2017.
 */

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

@Document
public class Company {

    @Id
    public String id;

    public String companyName;
    public String address;

    public Company() {}

    public Company(String companyName, String address) {
        this.companyName = companyName;
        this.address = address;
    }

    public String getId(){
        return this.id;
    }

}