package application.client;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import application.client.Client;

public interface ClientRepository extends MongoRepository<Client, String> {
	
		public Client findByName(String name);
	    public long deleteById(String id);
	    public List<Client> findAll();
	    public Client findById(String id);
}
