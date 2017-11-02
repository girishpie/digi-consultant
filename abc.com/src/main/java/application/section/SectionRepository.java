package application.section;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface SectionRepository extends MongoRepository<Section, String>{

	public Section findById(String id);

	public List<Section> findAll();

	public long deleteById(String id);
	

}