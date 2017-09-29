package application.response;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * Created by gipai on 9/27/2017.
 */
public class RestResponse extends Response {
    private Object response;

    public RestResponse(Object returnVal){
        super(HttpStatus.OK);
        this.response = returnVal;
    }


    public Object getResponse(){
        return response;
    }


}
