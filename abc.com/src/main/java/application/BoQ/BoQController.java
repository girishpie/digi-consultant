package application.BoQ;

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

import application.BoQDepartment.BoQDepartment;
import application.BoQDepartment.BoQDepartmentRepository;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/boq")
public class BoQController {
	
	@Autowired
	private final BoQRepository boQRepository;
	@Autowired
	private final BoQDepartmentRepository boqDepartmentRepository;
	
	
	BoQController(BoQRepository boQRepository, BoQDepartmentRepository boqDepartmentRepository) {
        this.boQRepository = boQRepository;
        this.boqDepartmentRepository = boqDepartmentRepository;
    }
	
	@PreAuthorize("hasAuthority('CREATE_BOQ')")
    @RequestMapping(value = "/{bodDepartId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String bodDepartId , @RequestBody BoQ input ) {
		BoQDepartment boqDepartment = boqDepartmentRepository.findById(bodDepartId);
        if(boqDepartment == null){
            return ResponseWrapper.getResponse(new RestError("BoQ Department With: "+ bodDepartId + " does not exist", HttpStatus.NOT_FOUND));

        }
        BoQ boq = new BoQ(bodDepartId, input.getSectionIds(), input.getVersion());
        BoQ boq1 = boQRepository.save(boq);
        boqDepartment.setBoqId(boq1.getId());
        boqDepartmentRepository.save(boqDepartment);
        return ResponseWrapper.getResponse(new RestResponse(boq1.getId()));
    }
 
    @PreAuthorize("hasAuthority('DELETE_BOQ')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	BoQ boq = boQRepository.findById(id);

        if(boq == null){
            return ResponseWrapper.getResponse( new RestError("BoQ With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        BoQDepartment boqDepartment = boqDepartmentRepository.findById(boq.getBoqDepartmentId());
        if(boqDepartment == null){
            return ResponseWrapper.getResponse( new RestError("BoQ Department With: "+ boq.getBoqDepartmentId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = boQRepository.deleteById(id);
        boqDepartment.setBoqId("");
        boqDepartmentRepository.save(boqDepartment);
        return ResponseWrapper.getResponse( new RestResponse(res));

    }
    
    @PreAuthorize("hasAuthority('UPDATE_BOQ')")
    @RequestMapping(value = "/{boqId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String boqId, @RequestBody BoQ input){
    	BoQ boq = boQRepository.findById(boqId);
        if(boq == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as project with id " + boqId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        boq.setBoqDepartmentId(input.getBoqDepartmentId());
        boq.setSectionIds(input.getSectionIds());
        boq.setVersion(input.getVersion());
        boq.setTotalVersions(input.getTotalVersions() +1);
        boq.update();
        boq = boQRepository.save(boq);
        return ResponseWrapper.getResponse(new RestResponse(boq));
    }

    @PreAuthorize("hasAuthority('READ_BOQ')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<BoQ> boqs = boQRepository.findAll();
        
        if (boqs.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No projects are exist", HttpStatus.NOT_FOUND));
         }
        List<BoQDto> boQDtos = new ArrayList<BoQDto>();
        for(int i = 0; i < boqs.size(); i++ ) {
        	BoQDepartment boQDepartment = boqDepartmentRepository.findById(boqs.get(i).getBoqDepartmentId());
        	BoQDto boQDto = new BoQDto(boqs.get(i), boQDepartment.getDepartmentName());
        	boQDtos.add(boQDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(boQDtos));

    }

    @PreAuthorize("hasAuthority('READ_BOQ')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	BoQ boq = boQRepository.findById(id);
        if (boq == null) {
            return ResponseWrapper.getResponse( new RestError("BoQ With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        BoQDepartment boQDepartment = boqDepartmentRepository.findById(boq.getBoqDepartmentId());
        BoQDto boqDto = new BoQDto(boq, boQDepartment.getDepartmentName());
        return ResponseWrapper.getResponse( new RestResponse(boqDto));
    }
}