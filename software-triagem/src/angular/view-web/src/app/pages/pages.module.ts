import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {AppHomeComponent} from "./app-home/app-home.component";
import {ReactiveFormsModule} from "@angular/forms";
import { AppUsersComponent } from './app-users/app-users.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
