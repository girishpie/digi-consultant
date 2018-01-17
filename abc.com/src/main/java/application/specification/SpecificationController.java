package application.specification;

import application.section.Section;
import application.section.SectionRepository;
import application.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/specification")
public class SpecificationController {

	@Autowired
    private final SectionRepository sectionRepository;
    @Autowired
	private final SpecificationRepository specificationRepository;

    
    SpecificationController(SpecificationRepository specificationRepository, SectionRepository sectionRepository) {
        this.sectionRepository = sectionRepository;
        this.specificationRepository = specificationRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_SPECIFICATION')")
    @RequestMapping(value = "/{sectionId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String sectionId , @RequestBody Specification input ) {
        Section section = sectionRepository.findById(sectionId);
        if(section == null){
            return ResponseWrapper.getResponse(new RestError("Section With: "+ sectionId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Specification specification = new Specification(input.getSpecificationName(), sectionId);
        specification = specificationRepository.save(specification);
        section.setSpecId(specification.getId());
        sectionRepository.save(section);
        return ResponseWrapper.getResponse(new RestResponse(specification.getId()));
    }

    @PreAuthorize("hasAuthority('DELETE_SPECIFICATION')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Specification specification = specificationRepository.findById(id);
        RestError restError ;
        if(specification == null){
            return ResponseWrapper.getResponse( new RestError("Specification With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        Section section = sectionRepository.findById(specification.getSectionId());
        if(section == null){
            return ResponseWrapper.getResponse( new RestError("Section With: "+ specification.getSectionId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = specificationRepository.deleteById(id);
        section.setSpecId("");
        sectionRepository.save(section);
        return ResponseWrapper.getResponse( new RestResponse(id));

    }
    
    @PreAuthorize("hasAuthority('UPDATE_SPECIFICATION')")
    @RequestMapping(value = "/{specId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String specId, @RequestBody Specification input){
    	Specification specification = specificationRepository.findById(specId);
        if(specification == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as specification with id " + specId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        specification.setSpecificationName(input.getSpecificationName());
        specification.setSectionId(input.getSectionId());
       
        specification.update();
        specification = specificationRepository.save(specification);
        return ResponseWrapper.getResponse(new RestResponse(specification));
    }

    @PreAuthorize("hasAuthority('READ_SPECIFICATION')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Specification> specifications = specificationRepository.findAll();
        
        if (specifications.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No specifications are exist", HttpStatus.NOT_FOUND));
         }
       
        return ResponseWrapper.getResponse(new RestResponse(specifications));

    }

    @PreAuthorize("hasAuthority('READ_SPECIFICATION')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Specification specification = specificationRepository.findById(id);
        if (specification == null) {
            return ResponseWrapper.getResponse( new RestError("Specification With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
       
        return ResponseWrapper.getResponse( new RestResponse(specification));
    }
}
