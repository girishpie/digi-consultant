package application.configurarions;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;

/**
 * Created by gipai on 9/30/2017.
 */
@Configuration
public class MongoConfiguration extends AbstractMongoConfiguration {

    //TODO: change this later
    private static String mongoDbName = "test";
    private static String mongoHost = "127.0.0.1";
    @Bean
    public GridFsTemplate gridFsTemplate() throws Exception {
        return new GridFsTemplate(mongoDbFactory(), mappingMongoConverter());
    }

    @Override
    protected String getDatabaseName() {
        return mongoDbName;
    }

    @Override
    @Bean
    public Mongo mongo() throws Exception {
        return new MongoClient(mongoHost);
    }

}