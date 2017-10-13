package application.product;

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
@RequestMapping("/api/product")
public class ProductController {

		@Autowired
	    private final ProductRepository productRepository;
	    
		ProductController(ProductRepository productRepository) {
	        this.productRepository = productRepository;
	    }

	    @PreAuthorize("hasAuthority('CREATE_PRODUCT')")
	    @RequestMapping( method = RequestMethod.POST)
	    ResponseEntity<?> add(@RequestBody Product input ) {
	    	Product prod = new Product(input.getName(), input.getQuantity(), input.getRate(), input.getAmount(), input.getUnit(), 
	    			input.getProductCat(), input.getProductSubCat());
	    	Product product = productRepository.save(prod);
	        return ResponseWrapper.getResponse(new RestResponse( product.getId()));
	    }


	    @PreAuthorize("hasAuthority('DELETE_PRODUCT')")
	    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
	    ResponseEntity<?> delete(@PathVariable String id) {
	    	Product product = productRepository.findById(id);
	        if(product == null){
	            return ResponseWrapper.getResponse( new RestError("product With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
	        }
	        long res = productRepository.deleteById(id);
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
	        product.setRate(input.getRate());
	        product.setUnit(input.getUnit());
	        product.setProductCat(input.getProductCat());
	        product.setProductSubCat(input.getProductSubCat());
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
	        return ResponseWrapper.getResponse(new RestResponse(products));

	    }

	    @PreAuthorize("hasAuthority('READ_PRODUCT')")
	    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	    public ResponseEntity<?> get(@PathVariable("id") String id) {
	    	Product product = productRepository.findById(id);
	        if (product == null) {
	            return ResponseWrapper.getResponse( new RestError("Product With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
	        }
	        return ResponseWrapper.getResponse( new RestResponse(product));
	    }
}
