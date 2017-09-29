package application.response;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

/**
 * Created by gipai on 9/29/2017.
 */
public class ResponseWrapper {

    public static ResponseEntity<IResponse> getResponse(Response response){
      /*  if(response instanceof RestResponse) {
            return new ResponseEntity<RestResponse>((RestResponse)response, new HttpHeaders(), response.getStatus());
        }else {
            return new ResponseEntity<RestError>((RestError)response, new HttpHeaders(), response.getStatus());
        }*/
        return new ResponseEntity<IResponse>(response, new HttpHeaders(), response.getStatus());

    }

}
