import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHomeComponent} from "./app-home/app-home.component";

const routes: Routes = [
  {path: 'home', component: AppHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
