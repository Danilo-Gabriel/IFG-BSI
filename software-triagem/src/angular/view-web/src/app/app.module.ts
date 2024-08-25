import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AngularReporModule} from "../shared/angular-repor/angular-repor.module";
import {PagesModule} from "./pages/pages.module";
import {PageAdminModule} from "./page-admin/page-admin.module";
import {LoginService} from "./pages/app-login/service/login.service";




@NgModule({
    declarations: [
        AppComponent,

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
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
