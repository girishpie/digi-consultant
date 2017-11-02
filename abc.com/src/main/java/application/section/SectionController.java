package application.section;

import application.BoQ.BoQ;
import application.BoQ.BoQRepository;
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
@RequestMapping("/api/section")
public class SectionController {

	@Autowired
    private final SectionRepository sectionRepository;
    @Autowired
	private final BoQRepository boqRepository;

    
    SectionController(SectionRepository sectionRepository, BoQRepository boqRepository ) {
        this.sectionRepository = sectionRepository;
        this.boqRepository = boqRepository;
    }

    @PreAuthorize("hasAuthority('CREATE_SECTION')")
    @RequestMapping(value = "/{boqId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String boqId , @RequestBody Section input ) {
        BoQ boq = boqRepository.findById(boqId);
        if(boq == null){
            return ResponseWrapper.getResponse(new RestError("BoQ With: "+ boqId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Section section = new Section(input.getSectionName(), boqId);
        Section sec = sectionRepository.save(section);
        boq.addSection(sec.getId());
        boqRepository.save(boq);
        return ResponseWrapper.getResponse(new RestResponse(sec.getId()));
    }

    @PreAuthorize("hasAuthority('DELETE_SECTION')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Section section = sectionRepository.findById(id);
        RestError restError ;
        if(section == null){
            return ResponseWrapper.getResponse( new RestError("Section With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        BoQ boq = boqRepository.findById(section.getBoqId());
        if(boq == null){
            return ResponseWrapper.getResponse( new RestError("BoQ With: "+ section.getBoqId()+ " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = sectionRepository.deleteById(id);
        boq.deleteSection(id);
        boqRepository.save(boq);
        return ResponseWrapper.getResponse( new RestResponse(res));

    }
    
    //Update Specific section
    @PreAuthorize("hasAuthority('UPDATE_SECTION')")
    @RequestMapping(value = "/{sectionId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String sectionId, @RequestBody Section input){
        Section section = sectionRepository.findById(sectionId);
        if(section == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as section with id " + sectionId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        section.setSectionName(input.getSectionName());
        section.setBoqId(input.getBoqId());
       
        section.update();
        section = sectionRepository.save(section);
        return ResponseWrapper.getResponse(new RestResponse(section));
    }

    @PreAuthorize("hasAuthority('READ_SECTION')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Section> sections = sectionRepository.findAll();
        
        if (sections.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No sections are exist", HttpStatus.NOT_FOUND));
         }
       
        return ResponseWrapper.getResponse(new RestResponse(sections));

    }

    @PreAuthorize("hasAuthority('READ_SECTION')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Section section = sectionRepository.findById(id);
        if (section == null) {
            return ResponseWrapper.getResponse( new RestError("Section With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
       
        return ResponseWrapper.getResponse( new RestResponse(section));
    }
}
