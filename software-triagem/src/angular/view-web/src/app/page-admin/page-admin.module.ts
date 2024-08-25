import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserListComponent} from "./user-list/user-list.component";
import { PageAdminRoutingModule } from './page-admin-routing.module';



@NgModule({
  declarations: [
    UserAddComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    PageAdminRoutingModule
  ]
})
export class PageAdminModule { }
