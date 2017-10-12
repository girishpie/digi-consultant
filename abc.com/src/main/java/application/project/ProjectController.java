package application.project;

import java.util.ArrayList;
import java.util.Date;
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

import application.client.Client;
import application.client.ClientRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
	
	@Autowired
	private final ProjectRepository projectRepository;
	@Autowired
	private final ClientRepository clientRepository;
	
	
	ProjectController(ClientRepository clientRepository, ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
        this.clientRepository = clientRepository;
    }
	
	@PreAuthorize("hasAuthority('CREATE_PROJECT')")
    @RequestMapping(value = "/{clientId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String clientId , @RequestBody Project input ) {
        Client client = clientRepository.findById(clientId);
        if(client == null){
            return ResponseWrapper.getResponse(new RestError("Client With: "+ clientId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Project project = new Project(input.getProjectName(), input.getJobNumber(), input.getSiteAddress(), input.getDescription(),
    			input.getStartDate(), input.getClientId(), input.getPhase());
        Project proj = projectRepository.save(project);
        client.addProject(proj.getId());
        clientRepository.save(client);
        return ResponseWrapper.getResponse(new RestResponse(proj.getId()));
    }

    //Delete Specific project
    @PreAuthorize("hasAuthority('DELETE_PROJECT')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Project project = projectRepository.findById(id);
        RestError restError ;
        if(project == null){
            return ResponseWrapper.getResponse( new RestError("Project With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        Client client = clientRepository.findById(project.getClientId());
        if(client == null){
            return ResponseWrapper.getResponse( new RestError("Client With: "+ project.getClientId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = projectRepository.deleteById(id);
        client.deleteProject(id);
        clientRepository.save(client);
        return ResponseWrapper.getResponse( new RestResponse(res));

    }
    
    //Update Specific project
    @PreAuthorize("hasAuthority('UPDATE_PROJECT')")
    @RequestMapping(value = "/{projectId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String projectId, @RequestBody Project input){
        Project project = projectRepository.findById(projectId);
        if(project == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as project with id " + projectId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        project.setProjectName(input.getProjectName());
        project.setJobNumber(input.getJobNumber());
        project.setSiteAddress(input.getSiteAddress());
        project.setDescription(input.getDescription());
        project.setPhase(input.getPhase());
        project.update();
        project = projectRepository.save(project);
        return ResponseWrapper.getResponse(new RestResponse(project));
    }

    @PreAuthorize("hasAuthority('READ_PROJECT')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Project> projects = projectRepository.findAll();
        
        if (projects.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No projects are exist", HttpStatus.NOT_FOUND));
         }
        List<ProjectDto> projectDtos = new ArrayList<ProjectDto>();
        for(int i = 0; i < projects.size(); i++ ) {
        	Client client = clientRepository.findById(projects.get(i).getClientId());
            ProjectDto projectDto = new ProjectDto(projects.get(i), client.getName());
        	projectDtos.add(projectDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(projectDtos));

    }

    @PreAuthorize("hasAuthority('READ_PROJECT')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Project project = projectRepository.findById(id);
        if (project == null) {
            return ResponseWrapper.getResponse( new RestError("Project With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        Client client = clientRepository.findById(project.getClientId());
        ProjectDto projectDto = new ProjectDto(project, client.getName());
        return ResponseWrapper.getResponse( new RestResponse(projectDto));
    }
}
