package application.BoQDepartment;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BoQDepartmentRepository extends MongoRepository<BoQDepartment, String> {

	public BoQDepartment findById(String boqId);

	public BoQDepartment save(BoQDepartment boqDepartment);

	public List<BoQDepartment> findAll();

	public long deleteById(String id);

}
