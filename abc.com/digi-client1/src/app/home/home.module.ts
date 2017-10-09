import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HeaderModule} from './header/header.module';
import {UserComponent} from '../users/user.component';
import {UIRouterModule} from '@uirouter/angular';
import {UserModule} from '../users/user.module';
import { SearchModule} from '../search/search.module';
import { PaginationModule} from '../pagination/pagination.module';
import {QueryParamsService} from './query-obeservables/query-params.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {RoleComponent} from "../roles/role.component";
import {RoleModule} from "../roles/role.module";

const userState = { name: 'user', url: '/user',  component: UserComponent };
const roleState = { name: 'role', url: '/role',  component: RoleComponent };

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    NgxPaginationModule,
    HeaderModule,
    UserModule,
    RoleModule,
    SearchModule,
    PaginationModule,
    UIRouterModule.forRoot({ states: [ userState,roleState ], useHash: true })
  ],
  exports : [HomeComponent],
  providers: [QueryParamsService],
  bootstrap: []
})
export class  HomeModule { }
