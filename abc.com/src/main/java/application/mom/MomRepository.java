package application.mom;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MomRepository extends MongoRepository<Mom, String>{

	long deleteById(String id);

	Mom findById(String id);

}
