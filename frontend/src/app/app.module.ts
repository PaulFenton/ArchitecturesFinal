

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DataService } from './service/data.service';


import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { HeaderComponent } from './public/header/header.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EstimateComponent } from './secure/estimate/estimate.component';
import { MakeEsimtateComponent } from './secure/make-esimtate/make-esimtate.component';


@NgModule({
  declarations: [
    AppComponent,
    EstimateComponent,
    MakeEsimtateComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HotTableModule,
    MaterialModule,
    AppRoutingModule,

  ],
  providers: [DataService, HotTableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
