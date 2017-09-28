package application;

import org.springframework.http.HttpStatus;

/**
 * Created by gipai on 9/27/2017.
 */
public class RestResponse {
    private Object response;

    public RestResponse(Object returnVal){
        this.response = returnVal;
    }

    public Object getResponse(){
        return this.response;
    }

}
