package application.audit;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by gipai on 9/29/2017.
 */
public interface AuditRepository extends MongoRepository<Audit, String> {
}
