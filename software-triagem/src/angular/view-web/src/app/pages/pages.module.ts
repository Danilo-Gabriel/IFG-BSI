import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppCadastrarComponent } from './app-cadastrar/app-cadastrar.component';
import { AppTriagemComponent } from './app-triagem/app-triagem.component';
import { AppLoginComponent } from './app-login/app-login.component';
import {AppUseradimComponent} from "./app-useradim/app-useradim.component";
import { AppEsqueceusenhaComponent } from './app-esqueceusenha/app-esqueceusenha.component';
import { AppAdministradorComponent } from './app-administrador/app-administrador.component';
import { AppAgendaconsultaComponent } from './app-agendaconsulta/app-agendaconsulta.component';
import { AppCadastraruserComponent } from './app-cadastraruser/app-cadastraruser.component';
import { AppConsultasuserComponent } from './app-consultasuser/app-consultasuser.component';

@NgModule({
    declarations: [
        AppHomeComponent,
        AppUsersComponent,
        AppCadastrarComponent,
        AppTriagemComponent,
        AppUseradimComponent,
        AppEsqueceusenhaComponent,
        AppAdministradorComponent,
        AppAgendaconsultaComponent,
        AppCadastraruserComponent,
        AppConsultasuserComponent,

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        FormsModule
    ]
})
export class PagesModule { }
