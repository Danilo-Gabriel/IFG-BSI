import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageAdminComponent} from "./page-admin.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AuthGuard} from "../guard/auth-guard";




const routes: Routes = [

  {path: 'admin', component: PageAdminComponent,
    children : [
      {path : 'usuario', component : UserListComponent,
        // canActivate : [AuthGuard]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
