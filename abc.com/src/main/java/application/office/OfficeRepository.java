package application.office;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OfficeRepository extends MongoRepository<Office, String>{

	public Office save(Office office);

	public Office findById(String id);

	public long deleteById(String id);

}
