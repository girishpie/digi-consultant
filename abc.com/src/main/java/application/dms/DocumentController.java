package application.dms;

import application.client.Client;
import application.client.ClientDto;
import application.company.Company;
import application.project.Project;
import application.project.ProjectRepository;
import application.response.*;
import org.eclipse.jetty.http.HttpHeader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by gipai on 9/30/2017.
 */
@RestController
@RequestMapping("/api/document")
public class DocumentController {

    @Autowired
    private final DocumentCatalogRepository documentCatalogRepository;
    @Autowired
    private final DocumentRepository documentRepository;
    @Autowired
    private final ProjectRepository projectRepository;
    
    public DocumentController(DocumentCatalogRepository documentCatalogRepository, DocumentRepository documentRepository, ProjectRepository projectRepository) {
        this.documentCatalogRepository = documentCatalogRepository;
        this.documentRepository = documentRepository;
        this.projectRepository =  projectRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_DOCUMENT')")
    @RequestMapping(value = "/{projectId}", headers = "content-type=multipart/*", method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@PathVariable("projectId") String projectId, @RequestParam("file")  MultipartFile file) {
    	Project project = projectRepository.findById(projectId);
        if(project == null){
            return ResponseWrapper.getResponse(new RestError("Project With: "+ projectId + " does not exist", HttpStatus.NOT_FOUND));

        }
        try {
            //First store the file
            String id = documentRepository.storeDocument(file.getOriginalFilename(),
                                                        file.getContentType(),
                                                        file.getInputStream());
            //Make an entry to document catalog.
            //first check if this document already has a version in the catalog.
            DocumentCatalog catalog = documentCatalogRepository.findByDisplayName(file.getOriginalFilename());
            //first time creation
            int majorVersion = 1;
            //no versions yet
            if(catalog != null) {
               List<Version> versions = catalog.getVersions();
                majorVersion = versions.get(versions.size()-1).getVersionNumber() + 1;
            } else {
                catalog = new DocumentCatalog();
                catalog.setDisplayName(file.getOriginalFilename());
                catalog.setProjectId(projectId);
            }
            //create a new catalog
            Version version = new Version();
            version.setFileStoreId(id);
            version.setVersionNumber(majorVersion);
            catalog.addVersion(version);
            catalog = documentCatalogRepository.save(catalog);
            return ResponseWrapper.getResponse(new RestResponse(catalog));

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseWrapper.getResponse(new RestError(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }

    @PreAuthorize("hasAuthority('READ_DOCUMENT')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public @ResponseBody HttpEntity<byte[]> get(@PathVariable("id") String id) {
        DocumentCatalog catalog = documentCatalogRepository.findById(id);
        if (catalog !=null ) {
            Version version = catalog.getLatestVersion();
            DocumentRepository.Document document = documentRepository.getDocumentStream(version.getFileStoreId());
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_TYPE, document.getContentType());
            return new HttpEntity<>(document.getOs().toByteArray(), headers);
        }
        return  null;
    }


    @PreAuthorize("hasAuthority('READ_DOCUMENT')")
    @RequestMapping(value = "/{id}/{version}", method = RequestMethod.GET)
    public @ResponseBody HttpEntity<byte[]> getVersion(@PathVariable("id") String id , @PathVariable("version") int versionNumber) {
        DocumentCatalog catalog = documentCatalogRepository.findById(id);
        if (catalog != null) {
            Version version = catalog.getVersion(versionNumber);
            if(version!=null) {
                DocumentRepository.Document document = documentRepository.getDocumentStream(version.getFileStoreId());
                HttpHeaders headers = new HttpHeaders();
                headers.add(HttpHeaders.CONTENT_TYPE, document.getContentType());
                return new HttpEntity<>(document.getOs().toByteArray(), headers);
            }
        }
        return null;
    }

    @PreAuthorize("hasAuthority('READ_DOCUMENT')")
    @RequestMapping(value = "/versions/{id}", method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAllDocumentVersions(@PathVariable("id") String id ) {
        DocumentCatalog catalog = documentCatalogRepository.findById(id);
        if (catalog == null) {
            return ResponseWrapper.getResponse( new RestError("Document with : "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse(catalog.getVersions()));
    }
    
    @PreAuthorize("hasAuthority('READ_DOCUMENT')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<DocumentCatalog> catalogs = documentCatalogRepository.findAll();
        if (catalogs.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No docuemnts exist", HttpStatus.NOT_FOUND));
         }
        List<DocumentCatalogDto> catalogDtos = new ArrayList<DocumentCatalogDto>();
        for(int i = 0; i < catalogs.size(); i++ ) {
        	Project project = projectRepository.findById(catalogs.get(i).getProjectId());
        	DocumentCatalogDto catalogDto = new DocumentCatalogDto(catalogs.get(i), project.getProjectName());
        	catalogDtos.add(catalogDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(catalogDtos));

    }

}
