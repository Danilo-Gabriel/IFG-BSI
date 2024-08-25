import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLoginComponent} from "../pages/app-login/app-login.component";
import {AppAdministradorComponent} from "../pages/app-administrador/app-administrador.component";
import {AppComponent} from "./app.component";


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: AppLoginComponent},

  {path:'pages',
    loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
