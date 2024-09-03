import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import {AppUsersComponent} from "./app-users/app-users.component";
import {AppCadastrarComponent} from "./app-cadastrar/app-cadastrar.component";
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";
import {AppConsultatriagemComponent} from "./app-consultatriagem/app-consultatriagem.component";
import {AppAgendaconsultasComponent} from "./app-agendaconsultas/app-agendaconsultas.component";
import {AngularReporModule} from "../../shared/angular-repor/angular-repor.module";
import {MessageService} from "primeng/api";

@NgModule({
    declarations: [
      AppUsersComponent,
      AppCadastrarComponent,
      AppTriagemComponent,
      AppAgendaconsultaComponent,
      AppConsultatriagemComponent,
      AppAgendaconsultasComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FormsModule,
    AngularReporModule,
  ],
  providers : [
    MessageService
  ]
})
export class PagesModule { }
