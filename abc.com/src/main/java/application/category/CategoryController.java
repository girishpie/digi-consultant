package application.category;

import application.response.IResponse;
import application.response.ResponseWrapper;
import application.response.RestError;
import application.response.RestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * Created by gipai on 10/1/2017.
 */
@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(method = RequestMethod.POST)
    ResponseEntity<IResponse> add(@RequestBody Category input){
        if(input.getName()== null || input.getName().isEmpty()){
            return ResponseWrapper.getResponse(new RestError("Category name must not be null or empty", HttpStatus.BAD_REQUEST));
        }
        input = categoryRepository.save(input);

        return ResponseWrapper.getResponse(new RestResponse(input));

    }

    private Category getParentSubCategory(Category rootCategory,String path)
    {
        Map<String , Category> categories = rootCategory.getSubCategories();
        String[] paths = path.split(":");
        for (Map.Entry<String, Category> entry : categories.entrySet()) {
           if(entry.getKey().equals(paths[0]) ){
               if(!path.contains(":")){
                   return entry.getValue();
               }
               else {
                   path = path.substring(path.indexOf(':')+1,path.length());
                   return getParentSubCategory(entry.getValue(),path);
               }
           }
        }
        return null;
    }

    @RequestMapping(value = "/{parentCategoryId}/" ,method = RequestMethod.POST)
    ResponseEntity<IResponse> addSubCategoryWithNoParent(@PathVariable String parentCategoryId, @RequestBody Category input){
        if(input.getName()== null || input.getName().isEmpty()){
            return ResponseWrapper.getResponse(new RestError("SubCategory name must not be null or empty", HttpStatus.BAD_REQUEST));
        }
        Category parentCategory = categoryRepository.findById(parentCategoryId);
        if(parentCategory == null){
            return ResponseWrapper.getResponse(new RestError("Parent Category with id: " + parentCategoryId+  "does not exist", HttpStatus.BAD_REQUEST));

        }

        boolean isSucess = parentCategory.addSubCategory(input);
        if(!isSucess){
            return ResponseWrapper.getResponse(new RestError("SubCategory with name " + input.getName() + "already exisits", HttpStatus.BAD_REQUEST));
        }
        input = categoryRepository.save(parentCategory);
        return ResponseWrapper.getResponse(new RestResponse(input));

    }


    @RequestMapping(value = "/{parentCategoryId}/{path}" ,method = RequestMethod.POST)
    ResponseEntity<IResponse> addSubCategoryWithParent(@PathVariable String parentCategoryId,@PathVariable String path, @RequestBody Category input){
        if(input.getName()== null || input.getName().isEmpty()){
            return ResponseWrapper.getResponse(new RestError("SubCategory name must not be null or empty", HttpStatus.BAD_REQUEST));
        }
        Category parentCategory = categoryRepository.findById(parentCategoryId);
        if(parentCategory == null){
            return ResponseWrapper.getResponse(new RestError("Parent Category with id: " + parentCategoryId+  "does not exist", HttpStatus.BAD_REQUEST));

        }
        Category subCategoryParent = getParentSubCategory(parentCategory,path);
        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError("Could not find the path " + path, HttpStatus.BAD_REQUEST));

        }
        boolean isSucess = subCategoryParent.addSubCategory(input);
        if(!isSucess){
            return ResponseWrapper.getResponse(new RestError("SubCategory with name " + input.getName() + "already exisits", HttpStatus.BAD_REQUEST));
        }
        input = categoryRepository.save(parentCategory);
        return ResponseWrapper.getResponse(new RestResponse(input));

    }



    @RequestMapping(value = "/{categoryId}" ,method = RequestMethod.GET)
    ResponseEntity<IResponse> get(@PathVariable String categoryId){
        if(categoryId== null || categoryId.isEmpty()){
            return ResponseWrapper.getResponse(new RestError("Id of category must not be null or empty", HttpStatus.BAD_REQUEST));
        }
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError("Parent Category with id: " + categoryId+  "does not exist", HttpStatus.NOT_FOUND));

        }
       return ResponseWrapper.getResponse(new RestResponse(category));

    }


    @RequestMapping(value = "/{categoryId}/{path}" ,method = RequestMethod.GET)
    ResponseEntity<IResponse> get(@PathVariable String categoryId,@PathVariable String path){
        if(categoryId== null || categoryId.isEmpty()){
            return ResponseWrapper.getResponse(new RestError("Id of category must not be null or empty", HttpStatus.BAD_REQUEST));
        }
        Category category = categoryRepository.findById(categoryId);
        Category subCategoryParent = getParentSubCategory(category,path);
        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError("Could not find the path " + path, HttpStatus.BAD_REQUEST));

        }
        if(category == null){
            return ResponseWrapper.getResponse(new RestError("Parent Category with id: " + categoryId+  "does not exist", HttpStatus.NOT_FOUND));

        }
        return ResponseWrapper.getResponse(new RestResponse(subCategoryParent));

    }


    @RequestMapping(method = RequestMethod.GET)
    ResponseEntity<IResponse> get(){
            List<Category> categories = categoryRepository.findAll();
        if(categories.isEmpty()){
            return ResponseWrapper.getResponse(new RestError("No categories found", HttpStatus.NOT_FOUND));
        }
        return ResponseWrapper.getResponse(new RestResponse(categories));
    }


    @RequestMapping(value = "/{categoryId}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String categoryId, @RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as caetgory with id " +categoryId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }

        category.setName(input.getName());
        category.setDescription(input.getDescription());
        category.update();
        category = categoryRepository.save(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }


    @RequestMapping(value = "/{categoryId}/{path}", method = RequestMethod.PATCH)
    ResponseEntity<IResponse> update(@PathVariable String categoryId, @PathVariable String path,@RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError("Update failed as caetgory with id " +categoryId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }
        Category subCategoryParent = getParentSubCategory(category,path);

        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError("Could not find the path " + path, HttpStatus.BAD_REQUEST));

        }
        subCategoryParent.setName(input.getName());
        subCategoryParent.setDescription(input.getDescription());
        category.update();
        category = categoryRepository.save(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }


    @RequestMapping(value = "/{categoryId}", method = RequestMethod.DELETE)
    ResponseEntity<IResponse> delete(@PathVariable String categoryId,@RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);
        if(category == null){
            return ResponseWrapper.getResponse(new RestError("Delete failed as caetgory with id " +categoryId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }
        categoryRepository.delete(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }

    @RequestMapping(value = "/{categoryId}/{path}", method = RequestMethod.DELETE)
    ResponseEntity<IResponse> deleteSubCategory(@PathVariable String categoryId,@PathVariable String path,@RequestBody Category input){
        Category category = categoryRepository.findById(categoryId);

        if(category == null){
            return ResponseWrapper.getResponse(new RestError("Delete failed as caetgory with id " +categoryId + " doesnot exist" , HttpStatus.NOT_FOUND));
        }
        String[] paths = path.split(":");
        String subcategoryId = paths[paths.length-1];
        path = path.substring(0,path.length() - (subcategoryId.length()+1));
        Category subCategoryParent = getParentSubCategory(category,path);
        if(subCategoryParent == null){
            return ResponseWrapper.getResponse(new RestError("Could not find the path " + path, HttpStatus.BAD_REQUEST));
        }
        subCategoryParent.removeSubCategory(subcategoryId);
        categoryRepository.save(category);
        return ResponseWrapper.getResponse(new RestResponse(category));
    }
}
