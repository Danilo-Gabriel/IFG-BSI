import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHomeComponent,} from "./pages/app-home/app-home.component";


const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: AppHomeComponent},
  {path:'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
