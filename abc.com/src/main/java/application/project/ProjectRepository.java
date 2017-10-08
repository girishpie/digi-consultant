package application.project;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProjectRepository extends MongoRepository<Project, String>{

	Project findById(String id);

	List<Project> findAll();

	long deleteById(String id);

}
