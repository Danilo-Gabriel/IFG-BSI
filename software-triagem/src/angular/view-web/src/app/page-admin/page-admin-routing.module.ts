import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageAdminComponent} from "./page-admin.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";




const routes: Routes = [

  {path: 'admin', component: PageAdminComponent,
    children : [
      {path : 'usuario', component : UserListComponent},
      {path :'agenda_consulta',component :AppAgendaconsultaComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
