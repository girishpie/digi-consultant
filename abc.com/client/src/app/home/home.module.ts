import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HeaderModule} from './header/header.module';
import {UserComponent} from '../users/user.component';
import {NewUserComponent} from '../users/new/new-user.component';
import {NewUserModule} from '../users/new/new-user.module';
import {UIRouterModule} from '@uirouter/angular';
import {UserModule} from '../users/user.module';
import { SearchModule} from '../search/search.module';
import { PaginationModule} from '../pagination/pagination.module';
import { ProjectComponent } from '../project/project.component';
import { NewProjectModule } from '../project/new/new-project.module';
import { NewProjectComponent } from '../project/new/new-project.component';
import { ProjectModule } from '../project/project.module';
import { ClientComponent } from '../client/client.component';
import { ClientModule } from '../client/client.module';
import { NewClientComponent } from '../client/new/new-client.component';
import { NewClientModule } from '../client/new/new-client.module';
import { CompanyComponent } from '../company/company.component';
import { CompanyModule } from '../company/company.module';
import { NewCompanyComponent } from '../company/new/new-company.component';
import { NewCompanyModule } from '../company/new/new-company.module';
import { PhaseComponent } from '../phase/phase.component';
import { PhaseModule } from '../phase/phase.module';
import { NewPhaseComponent } from '../phase/new/new-phase.component';
import { NewPhaseModule } from '../phase/new/new-phase.module';
import {QueryParamsService} from './query-obeservables/query-params.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {RoleComponent} from '../roles/role.component';
import {NewRoleModule} from '../roles/new/new-role.module';
import {NewRoleComponent} from '../roles/new/new-role.component';
import {RoleModule} from '../roles/role.module';
import { DocumentComponent } from '../document/document.component';
import { DocumentModule } from '../document/document.module';
import { NewDocumentComponent } from '../document/new/new-file.component';
import { NewDocumentModule } from '../document/new/new-file.module';
import { BoQComponent } from '../boq/boq.component';
import { BoQModule } from '../boq/boq.module';
import { NewBoQComponent } from '../boq/new/new-boq.component';
import { NewBoQModule } from '../boq/new/new-boq.module';
import { DepartmentComponent } from '../department/department.component';
import { DepartmentModule } from '../department/department.module';
import { NewDepartmentComponent } from '../department/new/new-department.component';
import { NewDepartmentModule } from '../department/new/new-department.module';
import { SectionComponent } from '../section/section.component';
import { SectionModule } from '../section/section.module';
import { NewSectionComponent } from '../section/new/new-section.component';
import { NewSectionModule } from '../section/new/new-section.module';
import { ProductComponent } from '../product/product.component';
import { ProductModule } from '../product/product.module';
import { NewProductComponent } from '../product/new/new-product.component';
import { NewProductModule } from '../product/new/new-product.module';
import { CategoryComponent } from '../category/category.component';
import { CategoryModule } from '../category/category.module';
import { NewCategoryComponent } from '../category/new/new-category.component';
import { NewCategoryModule } from '../category/new/new-category.module';
import { SubcategoryComponent } from '../subcategory/subcategory.component';
import { SubcategoryModule } from '../subcategory/subcategory.module';
import { NewSubcategoryComponent } from '../subcategory/new/new-subcategory.component';
import { NewSubcategoryModule } from '../subcategory/new/new-subcategory.module';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeModule } from '../employee/employee.module';
import { NewEmployeeComponent } from '../employee/new/new-employee.component';
import { NewEmployeeModule } from '../employee/new/new-employee.module';
import { MeetingComponent } from '../meeting/meeting.component';
import { MeetingModule } from '../meeting/meeting.module';
import { NewMeetingComponent } from '../meeting/new/new-meeting.component';
import { NewMeetingModule } from '../meeting/new/new-meeting.module';
import { LoginComponent } from '../login/login.component';

const userState = { name: 'user', url: '/user',  component: UserComponent };
const newUserState = { name: 'new-user', url: '/new-user',  component: NewUserComponent };
const roleState = { name: 'role', url: '/role',  component: RoleComponent };
const newRoleState = { name: 'new-role', url: '/new-role',  component: NewRoleComponent };
const projectState = { name: 'project', url: '/project',  component: ProjectComponent };
const newProjectState = { name: 'new-project', url: '/new-project',  component: NewProjectComponent };
const clientState = { name: 'client', url: '/client',  component: ClientComponent };
const newClientState = { name: 'new-client', url: '/new-client',  component: NewClientComponent };
const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
const newCompanyState = { name: 'new-company', url: '/new-company',  component: NewCompanyComponent };
const phaseState = { name: 'phase', url: '/phase',  component: PhaseComponent };
const newPhaseState = { name: 'new-phase', url: '/new-phase',  component: NewPhaseComponent };
const documentState = { name: 'document', url: '/document',  component: DocumentComponent };
const newDocumentState = { name: 'new-file', url: '/new-document',  component: NewDocumentComponent };
const boqState = { name: 'boq', url: '/boq',  component: BoQComponent };
const newBoQState = { name: 'new-boq', url: '/new-boq',  component: NewBoQComponent };
const departmentState = { name: 'department', url: '/department',  component: DepartmentComponent };
const newDepartmentState = { name: 'new-department', url: '/new-department',  component: NewDepartmentComponent };
const sectionState = { name: 'section', url: '/section',  component: SectionComponent };
const newSectionState = { name: 'new-section', url: '/new-section',  component: NewSectionComponent };
const productState = { name: 'product', url: '/product',  component: ProductComponent };
const newProductState = { name: 'new-product', url: '/new-product',  component: NewProductComponent };
const categoryState = { name: 'category', url: '/category',  component: CategoryComponent };
const newCategoryState = { name: 'new-category', url: '/new-category',  component: NewCategoryComponent };
const subcategoryState = { name: 'subcategory', url: '/subcategory',  component: SubcategoryComponent };
const newSubcategoryState = { name: 'new-subcategory', url: '/new-subcategory',  component: NewSubcategoryComponent };
const employeeState = { name: 'employee', url: '/employee',  component: EmployeeComponent };
const newEmployeeState = { name: 'new-employee', url: '/new-employee',  component: NewEmployeeComponent };
const meetingState = { name: 'meeting', url: '/meeting',  component: MeetingComponent };
const newMeetingState = { name: 'new-meeting', url: '/new-meeting',  component: NewMeetingComponent };
const loginState = { name: 'login', url: '/user-login',  component: LoginComponent };

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NgxPaginationModule,
    HeaderModule,
    UserModule,
    NewUserModule,
    // LoginModule,
    RoleModule,
    NewRoleModule,
    ProjectModule,
    NewProjectModule,
    ClientModule,
    NewClientModule,
    CompanyModule,
    NewCompanyModule,
    PhaseModule,
    NewPhaseModule,
    DocumentModule,
    NewDocumentModule,
    DepartmentModule,
    NewDepartmentModule,
    SearchModule,
    PaginationModule,
    BoQModule,
    NewBoQModule,
    SectionModule,
    NewSectionModule,
    ProductModule,
    NewProductModule,
    CategoryModule,
    NewCategoryModule,
    SubcategoryModule,
    NewSubcategoryModule,
    EmployeeModule,
    NewEmployeeModule,
    MeetingModule,
    NewMeetingModule,

    UIRouterModule.forRoot({ states: [ userState, newUserState, roleState, newRoleState, projectState,
      newProjectState, clientState, newClientState, companyState, newCompanyState, phaseState,
      newPhaseState, documentState, newDocumentState, boqState, newBoQState, departmentState, newDepartmentState,
      sectionState, newSectionState, productState, newProductState, categoryState, newCategoryState,
      subcategoryState, newSubcategoryState, employeeState, newEmployeeState, meetingState, newMeetingState], useHash: true })
  ],
  exports : [HomeComponent],
  providers: [QueryParamsService],
  bootstrap: []
})
export class  HomeModule { }
