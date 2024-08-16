import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';  // Importando o PagesModule
import { AppLoginComponent} from "./pages/app-login/app-login.component";
import {AppCadastrarComponent} from "./pages/app-cadastrar/app-cadastrar.component";

@NgModule({
    declarations: [

        AppComponent,
        AppLoginComponent, // Login é específico ao AppModule
        // Outros componentes que pertencem exclusivamente ao AppModule
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ButtonModule,
        DividerModule,
        ChipsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        PagesModule,
          // Incluindo o PagesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
