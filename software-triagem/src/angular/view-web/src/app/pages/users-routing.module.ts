import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {AppTriagemComponent} from "./app-triagem/app-triagem.component";
import {AppAgendaconsultasComponent} from "./app-agendaconsultas/app-agendaconsultas.component";
import {AppConsultatriagemComponent} from "./app-consultatriagem/app-consultatriagem.component";



const routes: Routes = [

  {path: 'users', component: UsersComponent,
    children : [
      // {path : 'consulta', component : AppTriagemComponent},
      {path : 'triagem', component : AppTriagemComponent},
      {path : 'agenda', component : AppAgendaconsultasComponent},
      {path : 'consultaTriagem', component : AppConsultatriagemComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
