package application.qualityControl;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface QualityControlRepository extends MongoRepository<QualityControl, String>{

	QualityControl findById(String id);

	long deleteById(String id);

}
