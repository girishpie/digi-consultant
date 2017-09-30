package application.dms;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by gipai on 9/30/2017.
 */

public interface DocumentCatalogRepository extends MongoRepository<DocumentCatalog, String> {

    DocumentCatalog findByDisplayName(String originalFilename);
    DocumentCatalog findById(String id);

}
