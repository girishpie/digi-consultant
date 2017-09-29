package application.audit;

import application.company.Company;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

/**
 * Created by gipai on 9/29/2017.
 */
@Aspect
@Component
public class AuditAspect {

    @Autowired
    private final AuditRepository auditRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(AuditAspect.class);

    public AuditAspect(AuditRepository auditRepository) {
        this.auditRepository = auditRepository;
    }

    @After("execution(* application.company.CompanyController.getAllCompanies ()) && args()")
    public void afterGetAllCompanies() {
        Audit audit = new Audit(ActionType.READ,ArtifactType.COMPANY, new ArtifactInfo("ALL"));
        auditRepository.save(audit);
        LOGGER.info("A request was issued for a get all comanies: ");
    }

    @After("execution(* application.company.CompanyController.getCompany (java.lang.String)) && args(id)")
    public void afterGetCompany(String id) {
        Audit audit = new Audit(ActionType.READ,ArtifactType.COMPANY, new ArtifactInfo(id));
        auditRepository.save(audit);
        LOGGER.info("A request was issued for a get  comany with id : " + id);
    }

    @After("execution(* application.company.CompanyController.add (application.company.Company)) && args(company)")
    public void afterAddCompany(Company company) {
        Audit audit = new Audit(ActionType.CREATE,ArtifactType.COMPANY, new ArtifactInfo(company.getCompanyName()));
        auditRepository.save(audit);
        LOGGER.info("A request was issued for a create  comany with name : " + company.getCompanyName());
    }


    @After("execution(* application.company.CompanyController.delete (java.lang.String)) && args(id)")
    public void afterDeleteCompany(String id) {
        Audit audit = new Audit(ActionType.DELETE,ArtifactType.COMPANY, new ArtifactInfo(id));
        auditRepository.save(audit);
        LOGGER.info("A request was issued for a delete  comany with id : " + id);
    }
}
