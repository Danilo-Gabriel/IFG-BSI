import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import {AppUsersComponent} from "./app-users/app-users.component";
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";
import {AppAgendaconsultaComponent} from "../page-admin/app-agendaconsulta/app-agendaconsulta.component";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {MessageService} from "primeng/api";
import {UsersComponent} from "./users.component";
import {AppCadastrarComponent} from "../pages-utils/app-cadastrar/app-cadastrar.component";
import { ListarTriagemComponent } from '../page-admin/listar-triagem/listar-triagem.component';





@NgModule({
    declarations: [
      AppUsersComponent,
      AppCadastrarComponent,
      AppTriagemComponent,
      AppAgendaconsultaComponent,
      UsersComponent,
      ListarTriagemComponent,



    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    FormsModule,
    AngularReporModule,
  ],
  providers : [
    MessageService
  ]
})
export class UsersModule { }
