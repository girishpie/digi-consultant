package application.client;

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
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/client")
public class ClientController {

	private final ClientRepository clientRepository;

    private final CompanyRepository companyRepository;
    
    @Autowired
    ClientController(CompanyRepository companyRepository , ClientRepository clientRepository) {
        this.companyRepository = companyRepository;
        this.clientRepository = clientRepository;
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
        return ResponseWrapper.getResponse( new RestResponse(res));

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
        return ResponseWrapper.getResponse(new RestResponse(clients));

    }

    @PreAuthorize("hasAuthority('READ_CLIENT')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Client client = clientRepository.findById(id);
        if (client == null) {
            return ResponseWrapper.getResponse( new RestError("Client With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse(client));
    }
    
}
