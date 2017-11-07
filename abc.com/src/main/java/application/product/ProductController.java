package application.product;

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

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import application.section.Section;
import application.section.SectionRepository;

@RestController
@RequestMapping("/api/product")
public class ProductController {

		@Autowired
	    private final ProductRepository productRepository;
		@Autowired
	    private final SectionRepository sectionRepository;
	    
		ProductController(ProductRepository productRepository, SectionRepository sectionRepository) {
	        this.productRepository = productRepository;
	        this.sectionRepository = sectionRepository;
	    }

	    @PreAuthorize("hasAuthority('CREATE_PRODUCT')")
	    @RequestMapping(value = "/{sectionId}", method = RequestMethod.POST)
	    ResponseEntity<?> add(@PathVariable String sectionId, @RequestBody Product input ) {
	    	Section section = sectionRepository.findById(sectionId);
	        if(section == null){
	            return ResponseWrapper.getResponse(new RestError("Section With: "+ sectionId + " does not exist", HttpStatus.NOT_FOUND));
	        }
	    	Product prod = new Product(input.getName(), input.getQuantity(), input.getBimId(), input.getAmount(), input.getUnit(), 
	    			input.getProductCat(), input.getProductSubCat(), sectionId, input.getDescription());
	    	Product product = productRepository.save(prod);
	    	section.addSection(product.getId());
	    	sectionRepository.save(section);
	        return ResponseWrapper.getResponse(new RestResponse( product.getId()));
	    }


	    @PreAuthorize("hasAuthority('DELETE_PRODUCT')")
	    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
	    ResponseEntity<?> delete(@PathVariable String id) {
	    	Product product = productRepository.findById(id);
	        if(product == null){
	            return ResponseWrapper.getResponse( new RestError("product With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
	        }
	        Section section = sectionRepository.findById(product.getSectionId());
	        if(section == null){
	            return ResponseWrapper.getResponse( new RestError("Company With: "+ product.getSectionId() + " does not exist", HttpStatus.NOT_FOUND));
	        }
	        long res = productRepository.deleteById(id);
	        section.deleteSection(id);
	        productRepository.save(product);
	        return ResponseWrapper.getResponse( new RestResponse(res));

	    }
	    
	    @PreAuthorize("hasAuthority('UPDATE_PRODUCT')")
	    @RequestMapping(value = "/{prodID}", method = RequestMethod.PATCH)
	    ResponseEntity<IResponse> update(@PathVariable String prodID, @RequestBody Product input){
	    	Product product = productRepository.findById(prodID);
	        if(product == null){
	            return ResponseWrapper.getResponse(new RestError("Update failed as product with id " + prodID + " doesnot exist" , HttpStatus.NOT_FOUND));
	        }

	        product.setName(input.getName());
	        product.setQuantity(input.getQuantity());
	        product.setAmount(input.getAmount());
	        product.setBimId(input.getBimId());
	        product.setUnit(input.getUnit());
	        product.setProductCat(input.getProductCat());
	        product.setProductSubCat(input.getProductSubCat());
	        product.setSectionId(input.getSectionId());
	        product.setDescription(input.getDescription());
	        product.update();
	        product = productRepository.save(product);
	        return ResponseWrapper.getResponse(new RestResponse(product));
	    }

	    @PreAuthorize("hasAuthority('READ_PRODUCT')")
	    @RequestMapping(method = RequestMethod.GET)
	    public ResponseEntity<?> getAll() {
	        List<Product> products = productRepository.findAll();
	        if (products.isEmpty()) {
	            return ResponseWrapper.getResponse( new RestError("No products exist", HttpStatus.NOT_FOUND));
	         }
	        List<ProductDto> productDtos = new ArrayList<ProductDto>();
	        for(int i = 0; i < products.size(); i++ ) {
	        	Section section = sectionRepository.findById(products.get(i).getSectionId());
		        ProductDto productDto = new ProductDto(products.get(i), section.getSectionName());
		        productDtos.add(productDto);
	        }
	        return ResponseWrapper.getResponse(new RestResponse(productDtos));
	    }

	    @PreAuthorize("hasAuthority('READ_PRODUCT')")
	    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	    public ResponseEntity<?> get(@PathVariable("id") String id) {
	    	Product product = productRepository.findById(id);
	        if (product == null) {
	            return ResponseWrapper.getResponse( new RestError("Product With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
	        }
	        Section section = sectionRepository.findById(product.getSectionId());
	        ProductDto productDto = new ProductDto(product, section.getSectionName());
	        return ResponseWrapper.getResponse( new RestResponse(productDto));
	    }
}
