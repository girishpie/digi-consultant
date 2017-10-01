package application.category;

import application.common.BasicInfo;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by gipai on 10/1/2017.
 */
public class Category extends BasicInfo {
    @Id
    private String id;
    private String name;
    private String description;
    private Map<String,Category> subCategories = new HashMap<String,Category>();

    public Category() {
    }

    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private Category findCategoryByName(String categoryName){
        for (Map.Entry<String, Category> entry : subCategories.entrySet()) {
            if(entry.getValue().getName().equals(categoryName) )
                return entry.getValue();
        }
        return null;
    }

    private Category findCategoryById(String id){
        for (Map.Entry<String, Category> entry : subCategories.entrySet()) {
            if(entry.getValue().getId().equals(id) )
                return entry.getValue();
        }
        return null;
    }

    public boolean addSubCategory(final Category category){
        Category subCategory = findCategoryByName(category.getName());
        if(subCategory != null){
            return false;
        }
        ObjectId idObject = new ObjectId();
        String id = idObject.get().toString();
        category.setId(id);
        subCategories.put(id,category);
        return true;
    }

    public boolean removeSubCategory(final String id){
        Category subCategory = findCategoryById(id);
        if(subCategory == null){
            return false;
        }
        subCategories.remove(id);
        return true;
    }

    public Map<String, Category> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(Map<String, Category> subCategories) {
        this.subCategories = subCategories;
    }
}
