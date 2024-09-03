import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLoginComponent} from "./pages-utils/app-login/app-login.component";
import {AppTrocarSenhaComponent} from "./pages-utils/app-trocar-senha/app-trocar-senha.component";

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: AppLoginComponent},
  {path: 'alter-senha', component: AppTrocarSenhaComponent},


  {path:'admin',
    loadChildren: () => import('./page-admin/page-admin.module').then(m => m.PageAdminModule)},

  {path:'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
