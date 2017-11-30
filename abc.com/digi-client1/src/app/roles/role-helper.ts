/**
 * Created by gipai on 10/8/2017.
 */

import {Injectable} from "@angular/core";




@Injectable()
export class RoleHelper{

  private permissions : Array<string> = new Array<string>();

  constructor(){
    this.permissions.push('READ_USER');
    this.permissions.push('CREATE_USER');
    this.permissions.push('DELETE_USER');
    this.permissions.push('UPDATE_USER');
    
    this.permissions.push('CREATE_ROLE');
    this.permissions.push('DELETE_ROLE');
    this.permissions.push('READ_ROLE');
    this.permissions.push('UPDATE_ROLE');
    
    this.permissions.push('CREATE_PROJECT');
    this.permissions.push('READ_PROJECT');
    this.permissions.push('DELETE_PROJECT');
    this.permissions.push('UPDATE_PROJECT');
    
    this.permissions.push('UPDATE_COMPNAY');
    this.permissions.push('CREATE_COMPNAY');
    this.permissions.push('DELETE_COMPNAY');
    this.permissions.push('READ_COMPNAY');
    
    this.permissions.push('CREATE_DEPARTMENT');
    this.permissions.push('DELETE_DEPARTMENT');
    this.permissions.push('READ_DEPARTMENT');
    this.permissions.push('UPDATE_DEPARTMENT');
    
    this.permissions.push('CREATE_CLIENT');
    this.permissions.push('DELETE_CLIENT');
    this.permissions.push('READ_CLIENT');
    this.permissions.push('UPDATE_CLIENT');
    
    this.permissions.push('CREATE_PHASE');
    this.permissions.push('DELETE_PHASE');
    this.permissions.push('READ_PHASE');
    this.permissions.push('UPDATE_PHASE');
    
    this.permissions.push('CREATE_PRODUCT');
    this.permissions.push('DELETE_PRODUCT');
    this.permissions.push('READ_PRODUCT');
    this.permissions.push('UPDATE_PRODUCT');

    this.permissions.push('CREATE_CATEGORY');
    this.permissions.push('DELETE_CATEGORY');
    this.permissions.push('READ_CATEGORY');
    this.permissions.push('UPDATE_CATEGORY');
    
    this.permissions.push('CREATE_DOCUMENT');
    this.permissions.push('DELETE_DOCUMENT');
    this.permissions.push('READ_DOCUMENT');
    this.permissions.push('UPDATE_DOCUMENT');
	
    this.permissions.push('CREATE_SPECIFICATION');
    this.permissions.push('DELETE_SPECIFICATION');
    this.permissions.push('READ_SPECIFICATION');
    this.permissions.push('UPDATE_SPECIFICATION');
    
    this.permissions.push('CREATE_BOQ');
    this.permissions.push('DELETE_BOQ');
    this.permissions.push('READ_BOQ');
    this.permissions.push('UPDATE_BOQ');
    
    this.permissions.push('CREATE_BOQDEPARTMENT');
    this.permissions.push('DELETE_BOQDEPARTMENT');
    this.permissions.push('READ_BOQDEPARTMENT');
    this.permissions.push('UPDATE_BOQDEPARTMENT');
    
	this.permissions.push('CREATE_SECTION');
    this.permissions.push('DELETE_SECTION');
    this.permissions.push('READ_SECTION');
    this.permissions.push('UPDATE_SECTION');
    
    this.permissions.push('CREATE_CR');
    this.permissions.push('DELETE_CR');
    this.permissions.push('READ_CR');
    this.permissions.push('UPDATE_CR');
    
    this.permissions.push('CREATE_EMPLOYEE');
    this.permissions.push('DELETE_EMPLOYEE');
    this.permissions.push('READ_EMPLOYEE');
    this.permissions.push('UPDATE_EMPLOYEE');
    
  }

  public getPermissions(): Array<string>{
    return this.permissions;
  }
}
