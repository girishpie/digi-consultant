package application.mom;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import application.category.Category;
import application.product.Product;
import application.product.ProductDto;
import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import application.section.Section;

@RestController
@RequestMapping("/api/mom")
public class MomController {
	
//	@Autowired
//	private final MomRepository momRepository;
//	
//	MomController(MomRepository momRepository){
//		this.momRepository = 	momRepository;
//	}
//	
//	@PreAuthorize("hasAuthority('CREATE_MOM')")
//	@RequestMapping( method = RequestMethod.POST)
//	ResponseEntity<IResponse> add(@RequestBody Mom input){
//		
//		Mom mom = new Mom();
//		mom.setTitle(input.getTitle());
////		mom.setObjective
////		mom.setDate
////		mom.setMeetingCommenced
////		mom.setMeetingAdjourned
////		mom.setMeetingNo
////		setAttendees
////		setAbsentees
////		setDiscussionItems
////		setDiscussedItems
//		mom = momRepository.save(mom);
//
//        return ResponseWrapper.getResponse(new RestResponse(mom));
//    }
//
//	 @PreAuthorize("hasAuthority('DELETE_MOM')")
//	    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
//	    ResponseEntity<?> delete(@PathVariable String id) {
//	    	Mom mom = momRepository.findById(id);
//	        if(mom == null){
//	            return ResponseWrapper.getResponse( new RestError("Mom With: "+ id + " does not exist", HttpStatus.NOT_FOUND));
//	        }
//	        long res = momRepository.deleteById(id);
//	        return ResponseWrapper.getResponse( new RestResponse(res));
//
//	    }
//	    
//	    @PreAuthorize("hasAuthority('UPDATE_MOM')")
//	    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
//	    ResponseEntity<IResponse> update(@PathVariable String id, @RequestBody Mom input){
//	    	Product product = productRepository.findById(id);
//	        if(product == null){
//	            return ResponseWrapper.getResponse(new RestError("Update failed as product with id " + prodID + " doesnot exist" , HttpStatus.NOT_FOUND));
//	        }
//
//	        product.setName(input.getName());
//	        product.setQuantity(input.getQuantity());
//	        product.setAmount(input.getAmount());
//	        product.setBimId(input.getBimId());
//	        product.setUnit(input.getUnit());
//	        product.setProductCatId(input.getProductCatId());
//	        product.setProductSubCatId(input.getProductSubCatId());
//	        product.setSectionId(input.getSectionId());
//	        product.setDescription(input.getDescription());
//	        product.update();
//	        product = productRepository.save(product);
//	        return ResponseWrapper.getResponse(new RestResponse(product));
//	    }
//
//	    @PreAuthorize("hasAuthority('READ_PRODUCT')")
//	    @RequestMapping(method = RequestMethod.GET)
//	    public ResponseEntity<?> getAll(@RequestBody(required = false) String sectionId) {
//	        List<Product> products = productRepository.findAll();
//	        if (products.isEmpty()) {
//	            return ResponseWrapper.getResponse( new RestError("No products exist", HttpStatus.NOT_FOUND));
//	         }
//	        List<ProductDto> productDtos = new ArrayList<ProductDto>();
//	        if(sectionId != null) {
//	        	for(int i = 0; i < products.size(); i++ ) {
//	        		if(products.get(i).getSectionId() == sectionId) {
//	        			String productCat = "";
//			        	Section section = sectionRepository.findById(products.get(i).getSectionId());
//			        	
//			        	if(products.get(i).getProductCatId() != null) {
//			        		Category category = categoryRepository.findById(products.get(i).getProductCatId());
//			        		productCat = category.getName();
////			        		if(products.get(i).getProductSubCatId() != null) {
////			        			Category subCategory = category.findCategoryById(products.get(i).getProductSubCatId());
////			        			productSubCat = subCategory.getName();
////			        		}
//			        	}
//				        ProductDto productDto = new ProductDto(products.get(i), section.getSectionName(), productCat);
//				        productDtos.add(productDto);
//	        		}
//		        }
//	        }
//	        else {
//		        for(int i = 0; i < products.size(); i++ ) {
//		        	Section section = sectionRepository.findById(products.get(i).getSectionId());
//		        	String productCat = "", productSubCat = "";
//		        	if(products.get(i).getProductCatId() != null) {
//		        		Category category = categoryRepository.findById(products.get(i).getProductCatId());
//		        		productCat = category.getName();
////		        		if(products.get(i).getProductSubCatId() != null) {
////		        			Category subCategory = category.findCategoryById(products.get(i).getProductSubCatId());
////		        			productSubCat = subCategory.getName();
////		        		}
//		        	}
//			        ProductDto productDto = new ProductDto(products.get(i), section.getSectionName(), productCat);
//			        productDtos.add(productDto);
//		        }
//	        }
//	        return ResponseWrapper.getResponse(new RestResponse(productDtos));
//	    }
//
//	    @PreAuthorize("hasAuthority('READ_PRODUCT')")
//	    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
//	    public ResponseEntity<?> get(@PathVariable("id") String id) {
//	    	Product product = productRepository.findById(id);
//	        if (product == null) {
//	            return ResponseWrapper.getResponse( new RestError("Product With: " + id + " Does not exist", HttpStatus.NOT_FOUND));
//	        }
//	        Section section = sectionRepository.findById(product.getSectionId());
//	        String productCat = "", productSubCat = "";
//     	if(product.getProductCatId() != null) {
//     		Category category = categoryRepository.findById(product.getProductCatId());
//     		productCat = category.getName();
////     		if(product.getProductSubCatId() != null) {
////     			Category subCategory = category.findCategoryById(product.getProductSubCatId());
////     			productSubCat = subCategory.getName();
////     		}
//     	}
//	        ProductDto productDto = new ProductDto(product, section.getSectionName(), productCat);
//	        return ResponseWrapper.getResponse( new RestResponse(productDto));
//	    }
}
