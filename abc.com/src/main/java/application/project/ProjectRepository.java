package application.project;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProjectRepository extends MongoRepository<Project, String>{

	public Project findById(String id);

	public List<Project> findAll();

	public long deleteById(String id);
	

}
