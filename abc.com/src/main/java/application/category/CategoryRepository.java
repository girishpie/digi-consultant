package application.category;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by gipai on 10/1/2017.
 */
public interface CategoryRepository extends MongoRepository<Category, String> {

    Category findById(String parentCategoryId);

}
