package application.dms;

import application.configurarions.MongoConfiguration;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;
//import com.sun.xml.internal.messaging.saaj.util.ByteOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsCriteria;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.Optional;

/**
 * Created by gipai on 9/30/2017.
 */
@Component
public class DocumentRepository {

    private GridFsTemplate gridFsTemplate;

    private final Logger logger = LoggerFactory.getLogger(DocumentRepository.class);
    @Autowired
    public DocumentRepository (GridFsTemplate gridFsTemplate){
        this.gridFsTemplate = gridFsTemplate;
    }

   public String storeDocument (final String documentDisplayName,
                                final String contentType ,
                                final InputStream inputStream){
        DBObject metaData = new BasicDBObject();
        return gridFsTemplate.store(inputStream, documentDisplayName, contentType, metaData).getId().toString();
    }

    public Document getDocumentStream (String documentId) {
        Document document;
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        GridFSDBFile gridFsDbFile = gridFsTemplate.findOne(Query.query(GridFsCriteria.where("_id").is(documentId)));
        Optional<GridFSDBFile> created = Optional.ofNullable(gridFsDbFile);
        if (created.isPresent()) {
            try {
                created.get().writeTo(os);
                document = new Document();
                document.setOs(os);
                document.setContentType(created.get().getContentType());
                return document;   
            } catch (IOException e) {
                e.printStackTrace();
                logger.error(e.getLocalizedMessage());
            }
        }
        return null;
    }


    class Document{
        private ByteArrayOutputStream os;
        private String contentType;
        public ByteArrayOutputStream getOs() {
            return os;
        }

        public void setOs(ByteArrayOutputStream os) {
            this.os = os;
        }

        public String getContentType() {
            return contentType;
        }

        public void setContentType(String contentType) {
            this.contentType = contentType;
        }

    }
}