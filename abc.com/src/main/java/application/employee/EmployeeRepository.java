package application.employee;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository  extends MongoRepository<Employee, String> {

	Employee findById(String id);

	long deleteById(String id);

}
