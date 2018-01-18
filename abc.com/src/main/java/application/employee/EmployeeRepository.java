package application.employee;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface EmployeeRepository  extends MongoRepository<Employee, String> {

	Employee findById(String id);

	long deleteById(String id);
	
	@Query(value = "{'projectIds': ?0 }")
	public List<Employee> findByProjectId(String projectId);
}
