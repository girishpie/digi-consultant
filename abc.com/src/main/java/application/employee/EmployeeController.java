package application.employee;

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

import application.department.Department;
import application.department.DepartmentRepository;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@Autowired
	private final EmployeeRepository employeeRepository;
	@Autowired
	private final DepartmentRepository departmentRepository;
	
	
	EmployeeController(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }
	
	@PreAuthorize("hasAuthority('CREATE_EMPLOYEE')")
    @RequestMapping(value = "/{departmentId}", method = RequestMethod.POST)
    ResponseEntity<?> add(@PathVariable String departmentId , @RequestBody Employee input ) {
        Department department = departmentRepository.findById(departmentId);
        if(department == null){
            return ResponseWrapper.getResponse(new RestError("Department With: "+ departmentId + " does not exist", HttpStatus.NOT_FOUND));

        }
        Employee employee = new Employee(input.getName(), input.getEmail(), input.getSkypeId(), input.getDepartmentId());
        Employee emp = employeeRepository.save(employee);
        department.addEmployee(emp.getId());
        departmentRepository.save(department);
        return ResponseWrapper.getResponse(new RestResponse(emp.getId()));
    }

    @PreAuthorize("hasAuthority('DELETE_EMPLOYEE')")
    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    ResponseEntity<?> delete(@PathVariable String id) {
    	Employee employee = employeeRepository.findById(id);
        RestError restError ;
        if(employee == null){
            return ResponseWrapper.getResponse( new RestError("Employee With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
        }
        Department department = departmentRepository.findById(employee.getDepartmentId());
        if(department == null){
            return ResponseWrapper.getResponse( new RestError("Client With: "+ department.getId() + " does not exist", HttpStatus.NOT_FOUND));
        }
        long res = employeeRepository.deleteById(id);
        department.deleteEmployee(id);
        departmentRepository.save(department);
        return ResponseWrapper.getResponse( new RestResponse(res));

    }
    
    @PreAuthorize("hasAuthority('UPDATE_EMPLOYEE')")
    @RequestMapping(value = "/{empId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String empId, @RequestBody Employee input){
    	Employee employee = employeeRepository.findById(empId);
        if(employee == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as employee with id " + empId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        employee.setName(input.getName());
        employee.setEmail(input.getEmail());
        employee.setSkypeId(input.getSkypeId());
        employee.setDepartmentId(input.getDepartmentId());
        employee.update();
        employee = employeeRepository.save(employee);
        return ResponseWrapper.getResponse(new RestResponse(employee));
    }

    @PreAuthorize("hasAuthority('READ_EMPLOYEE')")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        List<Employee> employees = employeeRepository.findAll();
        
        if (employees.isEmpty()) {
            return ResponseWrapper.getResponse( new RestError("No employees are exist", HttpStatus.NOT_FOUND));
         }
        List<EmployeeDto> employeeDtos = new ArrayList<EmployeeDto>();
        for(int i = 0; i < employees.size(); i++ ) {
        	Department department = departmentRepository.findById(employees.get(i).getDepartmentId());
        	EmployeeDto employeeDto = new EmployeeDto(employees.get(i), department.getName());
            employeeDtos.add(employeeDto);
        }
        return ResponseWrapper.getResponse(new RestResponse(employeeDtos));

    }

    @PreAuthorize("hasAuthority('READ_EMPLOYEE')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> get(@PathVariable("id") String id) {
    	Employee employee = employeeRepository.findById(id);
        if (employee == null) {
            return ResponseWrapper.getResponse( new RestError("Employee With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
        }
        Department department = departmentRepository.findById(employee.getDepartmentId());
        EmployeeDto employeeDto = new EmployeeDto(employee, department.getName());
        return ResponseWrapper.getResponse( new RestResponse(employeeDto));
    }

}
