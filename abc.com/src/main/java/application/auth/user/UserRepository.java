package application.auth.user;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by gipai on 9/28/2017.
 */
public interface UserRepository  extends MongoRepository<User, String> {

    User findByUsername(String email);
}
