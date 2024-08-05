import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHomeComponent} from "./app-home/app-home.component";
import {AppUsersComponent} from "./app-users/app-users.component";
import { AppCadastrarComponent } from './app-cadastrar/app-cadastrar.component';
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";

const routes: Routes = [
  {path: 'home', component: AppHomeComponent},
  {path: 'users', component: AppUsersComponent},
  { path: 'cadastrar', component: AppCadastrarComponent },
  { path: 'triagem', component: AppTriagemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
