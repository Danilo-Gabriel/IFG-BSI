import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AngularReporModule} from "../shared/angular-repor/angular-repor.module";
import {PagesModule} from "./pages/pages.module";
import {PageAdminModule} from "./page-admin/page-admin.module";
import {LoginService} from "./pages/pages-utils/app-login/service/login.service";
import {AppLoginComponent} from "./pages/pages-utils/app-login/app-login.component";
import {MessageService} from "primeng/api";
import {TrocarSenhaComponent} from "./pages/pages-utils/trocar-senha/trocar-senha.component";




@NgModule({
    declarations: [
        AppComponent,
        AppLoginComponent,
        TrocarSenhaComponent

    ],
    imports: [
        BrowserModule,
        PagesModule,
        PageAdminModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AngularReporModule
    ],
    providers: [
      LoginService,
      MessageService
    ],
  exports: [
    TrocarSenhaComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
