package application.BoQDepartment;

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

import application.project.Project;
import application.project.ProjectRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

	@RestController
	@RequestMapping("/api/boqdepartment")
	public class BoQDepartmentController {
		
		@Autowired
		private final ProjectRepository projectRepository;
		@Autowired
		private final BoQDepartmentRepository boqDepartmentRepository;
		
		
		BoQDepartmentController(BoQDepartmentRepository boqDepartmentRepository, ProjectRepository projectRepository) {
	        this.projectRepository = projectRepository;
	        this.boqDepartmentRepository = boqDepartmentRepository;
	    }
		
		@PreAuthorize("hasAuthority('CREATE_BOQDEPARTMENT')")
	    @RequestMapping(value = "/{projectId}", method = RequestMethod.POST)
	    ResponseEntity<?> add(@PathVariable String projectId , @RequestBody BoQDepartment input ) {
	        Project project = projectRepository.findById(projectId);
	        if(project == null){
	            return ResponseWrapper.getResponse(new RestError("Project With: "+ projectId + " does not exist", HttpStatus.NOT_FOUND));

	        }
	        BoQDepartment boqDepartment = new BoQDepartment(input.getDepartmentName(), project.getId());
	        BoQDepartment boqDepart = boqDepartmentRepository.save(boqDepartment);
	        project.addBoQDepartment(boqDepart.getId());
	        projectRepository.save(project);
	        return ResponseWrapper.getResponse(new RestResponse(boqDepart.getId()));
	    }

	    @PreAuthorize("hasAuthority('DELETE_BOQDEPARTMENT')")
	    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
	    ResponseEntity<?> delete(@PathVariable String id) {
	    	BoQDepartment boqDepartment = boqDepartmentRepository.findById(id);
	        RestError restError ;
	        if(boqDepartment == null){
	            return ResponseWrapper.getResponse( new RestError("BoQDepartment With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
	        }
	        Project project = projectRepository.findById(boqDepartment.getProjectId());
	        if(project == null){
	            return ResponseWrapper.getResponse( new RestError("Project With: "+ boqDepartment.getProjectId() + " does not exist", HttpStatus.NOT_FOUND));
	        }
	        long res = boqDepartmentRepository.deleteById(id);
	        project.deleteBoQDepartment(id);
	        projectRepository.save(project);
	        return ResponseWrapper.getResponse( new RestResponse(id));

	    }
	    
	    //Update Specific department
	    @PreAuthorize("hasAuthority('UPDATE_BOQDEPARTMENT')")
	    @RequestMapping(value = "/{boqId}", method = RequestMethod.PATCH)
	    ResponseEntity<IResponse> update(@PathVariable String boqId, @RequestBody BoQDepartment input){
	    	BoQDepartment boqDepartment = boqDepartmentRepository.findById(boqId);
	        if(boqDepartment == null){
	            return ResponseWrapper.getResponse(new RestError("Update failed as BoQ department with id " + boqId + " doesnot exist" , HttpStatus.NOT_FOUND));
	        }

	        boqDepartment.setDepartmentName(input.getDepartmentName());
	        boqDepartment.setProjectId(input.getProjectId());
	        boqDepartment.update();
	        boqDepartment = boqDepartmentRepository.save(boqDepartment);
	        return ResponseWrapper.getResponse(new RestResponse(boqDepartment));
	    }

	    @PreAuthorize("hasAuthority('READ_BOQDEPARTMENT')")
	    @RequestMapping(method = RequestMethod.GET)
	    public ResponseEntity<?> getAll() {
	        List<BoQDepartment> boqDepartments = boqDepartmentRepository.findAll();
	        
	        if (boqDepartments.isEmpty()) {
	            return ResponseWrapper.getResponse( new RestError("No projects are exist", HttpStatus.NOT_FOUND));
	         }
	        List<BoQDepartmentDto> boqDepartmentDtos = new ArrayList<BoQDepartmentDto>();
	        for(int i = 0; i < boqDepartments.size(); i++ ) {
	        	Project project = projectRepository.findById(boqDepartments.get(i).getProjectId());
	        	BoQDepartmentDto boqDepartmentDto = new BoQDepartmentDto(boqDepartments.get(i), project.getProjectName());
	            boqDepartmentDtos.add(boqDepartmentDto);
	        }
	        return ResponseWrapper.getResponse(new RestResponse(boqDepartmentDtos));

	    }

	    @PreAuthorize("hasAuthority('READ_BOQDEPARTMENT')")
	    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	    public ResponseEntity<?> get(@PathVariable("id") String id) {
	    	BoQDepartment boqDepartment = boqDepartmentRepository.findById(id);
	        if (boqDepartment == null) {
	            return ResponseWrapper.getResponse( new RestError("BoQ Department With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
	        }
	        Project project = projectRepository.findById(boqDepartment.getProjectId());
	        BoQDepartmentDto boqDepartmentDto = new BoQDepartmentDto(boqDepartment, project.getProjectName());
	        return ResponseWrapper.getResponse( new RestResponse(boqDepartmentDto));
	    }
	}
