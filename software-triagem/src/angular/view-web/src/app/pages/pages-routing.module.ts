import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppAdministradorComponent} from "./app-administrador/app-administrador.component";


const routes: Routes = [



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
