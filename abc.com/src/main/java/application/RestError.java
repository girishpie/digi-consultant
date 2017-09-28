package application;

import org.springframework.http.HttpStatus;

/**
 * Created by gipai on 9/27/2017.
 */
public class RestError {

    private String errorMessage;
    private HttpStatus status;

    public RestError(String errorMessage, HttpStatus status){
        this.errorMessage = errorMessage;
        this.status = status;
    }

    public String getErrorMessage(){
        return this.errorMessage;
    }

    public HttpStatus getStatus(){
        return this.status;
    }
}
