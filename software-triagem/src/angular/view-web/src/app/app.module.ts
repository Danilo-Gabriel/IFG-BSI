import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {AppLoginComponent} from "./pages/app-login/app-login.component";
import {DividerModule} from "primeng/divider";
import {ChipsModule} from "primeng/chips";
import {PagesModule} from "./pages/pages.module";
import {AppHomeComponent} from "./pages/app-home/app-home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppUsersComponent} from "./pages/app-users/app-users.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppHomeComponent,
    AppUsersComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        BrowserAnimationsModule,
        ButtonModule,
        DividerModule,
        ChipsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
