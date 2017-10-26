package application.phase;

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

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/phase")
public class PhaseController {

	@Autowired
    private final PhaseRepository phaseRepository;

    PhaseController(PhaseRepository phaseRepository) {
        this.phaseRepository = phaseRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_PHASE')")
    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@RequestBody Phase input) {
    	Phase phase = new Phase(input.getName());
        Phase phase1 = phaseRepository.save(phase);
        return ResponseWrapper.getResponse(new RestResponse(phase1.getId()));
    }

    @PreAuthorize("hasAuthority('DELETE_PHASE')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<IResponse> delete(@PathVariable String id) {
        long res = phaseRepository.deleteById(id);
        return ResponseWrapper.getResponse( new RestResponse( res));
    }

    //Update Specific company
    @PreAuthorize("hasAuthority('UPDATE_PHASE')")
    @RequestMapping(value = "/{phaseId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String phaseId, @RequestBody Phase input){
    	Phase phase = phaseRepository.findById(phaseId);
        if(phase == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as phase with id " + phaseId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        phase.setName(input.getName());
        
        phase.update();
        phase = phaseRepository.save(phase);
        return ResponseWrapper.getResponse(new RestResponse(phase));
    }
    
    @PreAuthorize("hasAuthority('READ_PHASE')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<IResponse> getAll() {
        List<Phase> phases = phaseRepository.findAll();
        if (phases.isEmpty()) {
            return ResponseWrapper.getResponse(new RestError("No Phases found", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse( new RestResponse( phases));
    }

    @PreAuthorize("hasAuthority('READ_PHASE')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<IResponse> get(@PathVariable("id") String id) {
    	Phase phase = phaseRepository.findById(id);
        if (phase == null) {
            return ResponseWrapper.getResponse( new RestError("Phase With: "+ id + " does not exist", HttpStatus.NOT_FOUND));

        }
        return ResponseWrapper.getResponse(  new RestResponse( phase));
    }
}