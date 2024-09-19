import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdminRoutingModule } from './page-admin-routing.module';
import {PageAdminComponent} from "./page-admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {UserListComponent} from "./user-list/user-list.component";
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';










@NgModule({
  declarations: [
    PageAdminComponent,
    UserListComponent,
    ListarConsultasComponent,





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
