import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLoginComponent} from "./pages/pages-utils/app-login/app-login.component";

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: AppLoginComponent},


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
