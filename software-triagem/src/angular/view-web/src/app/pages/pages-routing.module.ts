import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppHomeComponent} from "./app-home/app-home.component";
import {AppUsersComponent} from "./app-users/app-users.component";

const routes: Routes = [
  {path: 'home', component: AppHomeComponent},
  {path: 'users', component: AppUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
