import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AngularReporModule} from "../shared/angular-repor/angular-repor.module";
import {AppLoginComponent} from "../pages/app-login/app-login.component";
import {AppHomeComponent} from "../pages/app-home/app-home.component";
import {AppUsersComponent} from "../pages/app-users/app-users.component";
import {AppCadastrarComponent} from "../pages/app-cadastrar/app-cadastrar.component";
import {AppTriagemComponent} from "../pages/app-triagem/app-triagem.component";
import {AppUseradimComponent} from "../pages/app-useradim/app-useradim.component";
import {AppEsqueceusenhaComponent} from "../pages/app-esqueceusenha/app-esqueceusenha.component";
import {AppAdministradorComponent} from "../pages/app-administrador/app-administrador.component";
import {AppAgendaconsultaComponent} from "../pages/app-agendaconsulta/app-agendaconsulta.component";
import {AppCadastraruserComponent} from "../pages/app-cadastraruser/app-cadastraruser.component";
import {AppConsultasuserComponent} from "../pages/app-consultasuser/app-consultasuser.component";
import {AppConsultatriagemComponent} from "../pages/app-consultatriagem/app-consultatriagem.component";
import {AppAgendaconsultasComponent} from "../pages/app-agendaconsultas/app-agendaconsultas.component";
import {LoginService} from "../pages/app-login/service/login.service";
import {CommonModule} from "@angular/common";
import {PagesModule} from "../pages/pages.module";


@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        PagesModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AngularReporModule
    ],
    providers: [
      LoginService,
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
