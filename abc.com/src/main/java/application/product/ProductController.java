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

import application.category.Category;
import application.category.CategoryRepository;
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
		@Autowired
	    private final CategoryRepository categoryRepository;
	    
		ProductController(ProductRepository productRepository, SectionRepository sectionRepository, CategoryRepository categoryRepository) {
	        this.productRepository = productRepository;
	        this.sectionRepository = sectionRepository;
	        this.categoryRepository = categoryRepository;
	    }

	    @PreAuthorize("hasAuthority('CREATE_PRODUCT')")
	    @RequestMapping(value = "/{sectionId}", method = RequestMethod.POST)
	    ResponseEntity<?> add(@PathVariable String sectionId, @RequestBody Product input ) {
	    	Section section = sectionRepository.findById(sectionId);
	        if(section == null){
	            return ResponseWrapper.getResponse(new RestError("Section With: "+ sectionId + " does not exist", HttpStatus.NOT_FOUND));
	        }
	    	Product prod = new Product(input.getName(), input.getQuantity(), input.getBimId(), input.getAmount(), input.getUnit(), 
	    			 sectionId, input.getDescription(), input.getProductCatId());
	    	Product product = productRepository.save(prod);
	    	section.addProduct(product.getId());
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
	        section.deleteProduct(id);
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
	        product.setProductCatId(input.getProductCatId());
	        product.setProductSubCatId(input.getProductSubCatId());
	        product.setSectionId(input.getSectionId());
	        product.setDescription(input.getDescription());
	        product.update();
	        product = productRepository.save(product);
	        return ResponseWrapper.getResponse(new RestResponse(product));
	    }

	    @PreAuthorize("hasAuthority('READ_PRODUCT')")
	    @RequestMapping(method = RequestMethod.GET)
	    public ResponseEntity<?> getAll(@RequestBody(required = false) String sectionId) {
	        List<Product> products = productRepository.findAll();
	        if (products.isEmpty()) {
	            return ResponseWrapper.getResponse( new RestError("No products exist", HttpStatus.NOT_FOUND));
	         }
	        List<ProductDto> productDtos = new ArrayList<ProductDto>();
	        if(sectionId != null) {
	        	for(int i = 0; i < products.size(); i++ ) {
	        		if(products.get(i).getSectionId() == sectionId) {
	        			String productCat = "";
			        	Section section = sectionRepository.findById(products.get(i).getSectionId());
			        	
			        	if(products.get(i).getProductCatId() != null) {
			        		Category category = categoryRepository.findById(products.get(i).getProductCatId());
			        		productCat = category.getName();
//			        		if(products.get(i).getProductSubCatId() != null) {
//			        			Category subCategory = category.findCategoryById(products.get(i).getProductSubCatId());
//			        			productSubCat = subCategory.getName();
//			        		}
			        	}
				        ProductDto productDto = new ProductDto(products.get(i), section.getSectionName(), productCat);
				        productDtos.add(productDto);
	        		}
		        }
	        }
	        else {
		        for(int i = 0; i < products.size(); i++ ) {
		        	Section section = sectionRepository.findById(products.get(i).getSectionId());
		        	String productCat = "", productSubCat = "";
		        	if(products.get(i).getProductCatId() != null) {
		        		Category category = categoryRepository.findById(products.get(i).getProductCatId());
		        		productCat = category.getName();
//		        		if(products.get(i).getProductSubCatId() != null) {
//		        			Category subCategory = category.findCategoryById(products.get(i).getProductSubCatId());
//		        			productSubCat = subCategory.getName();
//		        		}
		        	}
			        ProductDto productDto = new ProductDto(products.get(i), section.getSectionName(), productCat);
			        productDtos.add(productDto);
		        }
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
	        String productCat = "", productSubCat = "";
        	if(product.getProductCatId() != null) {
        		Category category = categoryRepository.findById(product.getProductCatId());
        		productCat = category.getName();
//        		if(product.getProductSubCatId() != null) {
//        			Category subCategory = category.findCategoryById(product.getProductSubCatId());
//        			productSubCat = subCategory.getName();
//        		}
        	}
	        ProductDto productDto = new ProductDto(product, section.getSectionName(), productCat);
	        return ResponseWrapper.getResponse( new RestResponse(productDto));
	    }
}
