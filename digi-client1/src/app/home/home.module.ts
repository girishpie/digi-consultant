import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {HeaderModule} from './header/header.module';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from '../users/user.component';
import {UIRouterModule} from '@uirouter/angular';
import {UserModule} from '../users/user.module';

const userState = { name: 'user', url: '/user',  component: UserComponent };


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HeaderModule,
    UserModule,
    UIRouterModule.forRoot({ states: [ userState ], useHash: true })
  ],
  exports : [HomeComponent],
  providers: [],
  bootstrap: []
})
export class  HomeModule { }
