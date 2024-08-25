import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUsersComponent } from './app-users/app-users.component';

import {AppAdministradorComponent} from "./app-administrador/app-administrador.component";


const routes: Routes = [

  {path: 'admin', component: AppAdministradorComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
