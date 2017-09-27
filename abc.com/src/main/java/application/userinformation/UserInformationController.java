package application.userinformation;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
/**
 * Created by gipai on 9/26/2017.
 */
@RestController
@RequestMapping("/loggedUser")
public class UserInformationController {

    @RequestMapping(method = RequestMethod.GET , produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<String> findMessagesForUser(Principal principal) {
        return new ResponseEntity<String>(principal.getName(), HttpStatus.OK);
    }
}
