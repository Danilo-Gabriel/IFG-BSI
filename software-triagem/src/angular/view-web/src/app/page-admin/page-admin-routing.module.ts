import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageAdminComponent} from "./page-admin.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AppAgendaconsultaComponent} from "./app-agendaconsulta/app-agendaconsulta.component";
import {ListarTriagemComponent} from "./listar-triagem/listar-triagem.component";
import {ListarConsultasComponent} from "./listar-consultas/listar-consultas.component";






const routes: Routes = [

  {path: 'admin', component: PageAdminComponent,
    children : [
      {path : 'usuario', component : UserListComponent},
      {path :'agenda',component :AppAgendaconsultaComponent},
      {path :'listar_triagem',component :ListarTriagemComponent},
      {path :'listar_consultas',component :ListarConsultasComponent},


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
