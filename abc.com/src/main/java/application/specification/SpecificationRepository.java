package application.specification;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SpecificationRepository extends MongoRepository<Specification, String>{

	public Specification findById(String id);

	public List<Specification> findAll();

	public long deleteById(String id);
	

}