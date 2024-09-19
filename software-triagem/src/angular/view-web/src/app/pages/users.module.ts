import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";
import {AppConsultatriagemComponent} from "./app-consultatriagem/app-consultatriagem.component";
import {AppAgendaconsultasComponent} from "./app-agendaconsultas/app-agendaconsultas.component";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {MessageService} from "primeng/api";
import {UsersComponent} from "./users.component";
import {AppCadastrarComponent} from "../pages-utils/app-cadastrar/app-cadastrar.component";
import {CookieService} from "ngx-cookie-service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "../../shared/filter";

@NgModule({
    declarations: [
      AppCadastrarComponent,
      AppTriagemComponent,
      AppAgendaconsultaComponent,
      AppConsultatriagemComponent,
      AppAgendaconsultasComponent,
      UsersComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    FormsModule,
    AngularReporModule,


  ],
  providers : [
    MessageService,
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class UsersModule { }
