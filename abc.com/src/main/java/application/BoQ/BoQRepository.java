package application.BoQ;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BoQRepository extends MongoRepository<BoQ, String> {

	public BoQ save(BoQ boq);

	public BoQ findById(String id);

	public long deleteById(String id);

	public List<BoQ> findAll();

}
