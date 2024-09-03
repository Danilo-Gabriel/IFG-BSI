import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAdminComponent} from "../page-admin/page-admin.component";
import {UserListComponent} from "../page-admin/user-list/user-list.component";



const routes: Routes = [

  {path: 'pages', component: PageAdminComponent,
    children : [
      // {path : 'home', component : UserListComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
