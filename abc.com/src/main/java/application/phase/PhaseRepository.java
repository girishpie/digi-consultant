package application.phase;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhaseRepository extends MongoRepository<Phase, String> {

	public long deleteById(String id);

	public Phase findById(String phaseId);

}
