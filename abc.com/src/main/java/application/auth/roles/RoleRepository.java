package application.auth.roles;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by gipai on 9/28/2017.
 */
public interface RoleRepository  extends MongoRepository<Role, String> {

    Role findById(String id);
    Role findByName(String name);
	long deleteById(String id);
}

