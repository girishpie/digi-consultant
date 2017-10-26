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
import {RoleComponent} from "../roles/role.component";
import {RoleModule} from "../roles/role.module";

const userState = { name: 'user', url: '/user',  component: UserComponent };
const roleState = { name: 'role', url: '/role',  component: RoleComponent };
const projectState = { name: 'project', url: '/project',  component: ProjectComponent };
const clientState = { name: 'client', url: '/client',  component: ClientComponent };
const companyState = { name: 'company', url: '/company',  component: CompanyComponent };
const phaseState = { name: 'phase', url: '/phase',  component: PhaseComponent };

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
    SearchModule,
    PaginationModule,
    UIRouterModule.forRoot({ states: [ userState,roleState,projectState,clientState,companyState,phaseState], useHash: true })
  ],
  exports : [HomeComponent],
  providers: [QueryParamsService],
  bootstrap: []
})
export class  HomeModule { }
