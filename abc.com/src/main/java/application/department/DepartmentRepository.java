package application.department;

import application.company.Company;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by gipai on 9/27/2017.
 */
public interface DepartmentRepository extends MongoRepository<Department, String> {

    public Department findByName(String name);
    public long deleteById(String id);
    public List<Department> findAll();
    public Department findById(String id);
}
