package application.client;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import application.company.Company;
import application.company.CompanyRepository;
import application.project.Project;
import application.project.ProjectDto;
import application.project.ProjectRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/client")
public class ClientController {
	@Autowired
	private final ClientRepository clientRepository;
	@Autowired
    private final CompanyRepository companyRepository;
	@Autowired
    private final ProjectRepository projectRepository;
 
    ClientController(CompanyRepository companyRepository , ClientRepository clientRepository, ProjectRepository projectRepository) {
        this.companyRepository = companyRepository;
        this.clientRepository = clientRepository;
        this.projectRepository = projectRepository;
    }
    
    
    @PreAuthorize("hasAuthority('CREATE_CLIENT')")
    @RequestMapping(value = "/{companyId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String companyId , @RequestBody Client input ) {
        Company company = companyRepository.findById(companyId);
        if(company == null){
            return ResponseWrapper.getResponse(new RestError("Company With: "+ companyId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Client clie= new Client(input.getName(),company.getId(), input.getAddress());
        Client client = clientRepository.save(clie);
        company.addClient(clie.getId());
        companyRepository.save(company);
        return ResponseWrapper.getResponse(new RestResponse(client.getId()));
    }

    //Delete Specific client
    @PreAuthorize("hasAuthority('DELETE_CLIENT')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Client client = clientRepository.findById(id);
        RestError restError ;
        if(client == null){
            return ResponseWrapper.getResponse( new RestError("Client With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        Company company = companyRepository.findById(client.getCompanyId());
        if(company == null){
            return ResponseWrapper.getResponse( new RestError("Company With: "+ client.getCompanyId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = clientRepository.deleteById(id);
        company.deleteClient(id);
        companyRepository.save(company);
        return ResponseWrapper.getResponse( new RestResponse(id));

    }
    
    //Update Specific client
    @PreAuthorize("hasAuthority('UPDATE_CLIENT')")
    @RequestMapping(value = "/{clientId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String clientId, @RequestBody Client input){
        Client client = clientRepository.findById(clientId);
        if(client == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as client with id " + clientId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        client.setName(input.getName());
        client.setAddress(input.getAddress());
        client.update();
        client = clientRepository.save(client);
        return ResponseWrapper.getResponse(new RestResponse(client));
    }

    @PreAuthorize("hasAuthority('READ_CLIENT')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Client> clients = clientRepository.findAll();
        if (clients.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No clients exist", HttpStatus.NOT_FOUND));
         }
        List<ClientDto> clientDtos = new ArrayList<ClientDto>();
        for(int i = 0; i < clients.size(); i++ ) {
        	List<String> projectNames = new ArrayList<String>();
        	for(int j =0; j < clients.get(i).getProjectIds().size(); j++) {
        		Project project = projectRepository.findById(clients.get(i).getProjectIds().get(j));
        		projectNames.add(project.getProjectName());
        	}
        	Company company = companyRepository.findById(clients.get(i).getCompanyId());
        	ClientDto clientDto = new ClientDto(clients.get(i), company.getCompanyName(), projectNames);
        	clientDtos.add(clientDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(clientDtos));

    }

    @PreAuthorize("hasAuthority('READ_CLIENT')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Client client = clientRepository.findById(id);
    	List<String> projectNames = new ArrayList<String>();
    	for(int j =0; j < client.getProjectIds().size(); j++) {
    		Project project = projectRepository.findById(client.getProjectIds().get(j));
    		projectNames.add(project.getProjectName());
    	}
    	Company company = companyRepository.findById(client.getCompanyId());
    	ClientDto clientDto = new ClientDto(client, company.getCompanyName(), projectNames);
        if (client == null) {
            return ResponseWrapper.getResponse( new RestError("Client With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse(clientDto));
    }
    
}
