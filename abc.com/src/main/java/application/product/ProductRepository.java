package application.product;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {

	public long deleteById(String id);

	public Product findById(String id);
	public List<Product> findAll();
}
