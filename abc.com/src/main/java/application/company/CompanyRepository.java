package application.company;

/**
 * Created by gipai on 9/26/2017.
 */
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface CompanyRepository extends MongoRepository<Company, String> {
    public Company findByCompanyName(String name);
    public long deleteById(String id);
    public List<Company> findAll();
    public Company findById(String id);
}