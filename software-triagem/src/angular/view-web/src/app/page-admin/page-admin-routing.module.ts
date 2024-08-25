import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageAdminComponent} from "./page-admin.component";



const routes: Routes = [

  {path: '', component: PageAdminComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
