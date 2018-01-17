package application.auth.user;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by gipai on 9/28/2017.
 */
public interface UserRepository  extends MongoRepository<User, String> {

    User findByUserId(String userId);

    User findById(String id);

    long deleteById(String id);

    Page<User> findByUserIdLike(String searchString, Pageable pageable);
    
    Optional<User> findUserByEmail(String email) ;

    Optional<User> findUserByResetToken(String resetToken) ;
	
}
