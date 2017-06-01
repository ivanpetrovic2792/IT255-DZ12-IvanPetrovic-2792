import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { AllcountriesComponent } from './allcountries/allcountries.component';


@NgModule({
imports: [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule ],
declarations: [ AppComponent,
RegisterComponent,   LoginComponent, AddcountryComponent, AllcountriesComponent],
bootstrap: [ AppComponent ]
})

export class AppModule { }
