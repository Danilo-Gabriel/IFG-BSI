import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {AppHomeComponent} from "./app-home/app-home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppUsersComponent } from './app-users/app-users.component';
import { AppCadastrarComponent } from './app-cadastrar/app-cadastrar.component';
import { AppTriagemComponent } from './app-triagem/app-triagem.component';


@NgModule({
  declarations: [


    AppCadastrarComponent,
         AppTriagemComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        FormsModule
    ]
})
export class PagesModule { }
