import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';  // Importando o PagesModule
import { AppLoginComponent} from "./pages/app-login/app-login.component";
import {AngularReporModule} from "../shared/angular-repor/angular-repor.module";

@NgModule({
    declarations: [
        AppComponent,
        AppLoginComponent, // Login é específico ao AppModule
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
<<<<<<< HEAD
        PagesModule,

=======
        AngularReporModule,
        PagesModule, //GERENCIAR OS MODULOS DE PAGINAÇÃO
>>>>>>> origin/valdeir-main
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
