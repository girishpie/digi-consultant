package application.response;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

/**
 * Created by gipai on 9/27/2017.
 */
public class RestError extends Response {

    private String errorMessage;


    public RestError(String errorMessage, HttpStatus status){
        super(status);
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage(){
        return this.errorMessage;
    }


}
