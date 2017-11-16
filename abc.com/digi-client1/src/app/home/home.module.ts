import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HeaderModule} from './header/header.module';
import {UserComponent} from '../users/user.component';
import {UIRouterModule} from '@uirouter/angular';
import {UserModule} from '../users/user.module';
import { SearchModule} from '../search/search.module';
import { PaginationModule} from '../pagination/pagination.module';
import { ProjectComponent } from '../project/project.component';
import { ProjectModule } from '../project/project.module';
import { ClientComponent } from '../client/client.component';
import { ClientModule } from '../client/client.module';
import { CompanyComponent } from '../company/company.component';
import { CompanyModule } from '../company/company.module';
import { PhaseComponent } from '../phase/phase.component';
import { PhaseModule } from '../phase/phase.module';
import {QueryParamsService} from './query-obeservables/query-params.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {RoleComponent} from '../roles/role.component';
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
import { SectionComponent } from '../section/section.component';
import { SectionModule } from '../section/section.module';
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

const userState = { name: 'user', url: '/user',  component: UserComponent };
const roleState = { name: 'role', url: '/role',  component: RoleComponent };
const projectState = { name: 'project', url: '/project',  component: ProjectComponent };
const clientState = { name: 'client', url: '/client',  component: ClientComponent };
const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
const phaseState = { name: 'phase', url: '/phase',  component: PhaseComponent };
const documentState = { name: 'document', url: '/document',  component: DocumentComponent };
const newDocumentState = { name: 'new-file', url: '/new-file',  component: NewDocumentComponent };
const boqState = { name: 'boq', url: '/boq',  component: BoQComponent };
const newBoQState = { name: 'new-boq', url: '/new-boq',  component: NewBoQComponent };
const departmentState = { name: 'department', url: '/department',  component: DepartmentComponent };
const sectionState = { name: 'section', url: '/section',  component: SectionComponent };
const productState = { name: 'product', url: '/product',  component: ProductComponent };
const newProductState = { name: 'new-product', url: '/new-product',  component: NewProductComponent };
const categoryState = { name: 'category', url: '/category',  component: CategoryComponent };
const newCategoryState = { name: 'new-category', url: '/new-category',  component: NewCategoryComponent };
const subcategoryState = { name: 'subcategory', url: '/subcategory',  component: SubcategoryComponent };
const newSubcategoryState = { name: 'new-subcategory', url: '/new-subcategory',  component: NewSubcategoryComponent };

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NgxPaginationModule,
    HeaderModule,
    UserModule,
    RoleModule,
    ProjectModule,
    ClientModule,
    CompanyModule,
    PhaseModule,
    DocumentModule,
    NewDocumentModule,
    DepartmentModule,
    SearchModule,
    PaginationModule,
    BoQModule,
    NewBoQModule,
    SectionModule,
    ProductModule,
    NewProductModule,
    CategoryModule,
    NewCategoryModule,
    SubcategoryModule,
    NewSubcategoryModule,
    UIRouterModule.forRoot({ states: [ userState, roleState, projectState, clientState, companyState,
      phaseState, documentState, newDocumentState, boqState, newBoQState, departmentState, sectionState,
      productState, newProductState, categoryState, newCategoryState, subcategoryState, newSubcategoryState], useHash: true })
  ],
  exports : [HomeComponent],
  providers: [QueryParamsService],
  bootstrap: []
})
export class  HomeModule { }
