import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminRoutingModule } from './page-admin-routing.module';
import {PageAdminComponent} from "./page-admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {UserListComponent} from "./user-list/user-list.component";







@NgModule({
  declarations: [
    PageAdminComponent,
    UserListComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularReporModule,
    PageAdminRoutingModule
  ]
})
export class PageAdminModule { }
