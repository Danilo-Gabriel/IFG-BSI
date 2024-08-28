import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppCadastrarComponent } from './app-cadastrar/app-cadastrar.component';
import { AppTriagemComponent } from './app-triagem/app-triagem.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppUseradimComponent } from './app-useradim/app-useradim.component';
import {AppEsqueceusenhaComponent} from "./app-esqueceusenha/app-esqueceusenha.component";
import {AppAdministradorComponent} from "./app-administrador/app-administrador.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";
import {AppCadastraruserComponent} from "./app-cadastraruser/app-cadastraruser.component";
import {AppConsultasuserComponent} from "./app-consultasuser/app-consultasuser.component";

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path:'home',component:AppHomeComponent },
  { path: 'users', component: AppUsersComponent },
  { path: 'cadastrar', component: AppCadastrarComponent },
  { path: 'triagem', component: AppTriagemComponent },
  { path: 'useradim', component: AppUseradimComponent },
  { path: 'esqueceusenha',component:AppEsqueceusenhaComponent},
  { path: 'administrador',component:AppAdministradorComponent},
  { path: 'agendaconsulta',component:AppAgendaconsultaComponent},
  { path: 'cadastraruser',component:AppCadastraruserComponent},
  {path: 'consultaruser',component:AppConsultasuserComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
