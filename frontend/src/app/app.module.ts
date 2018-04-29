

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
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { EstimateComponent } from './secure/estimate/estimate.component';
import { MakeEsimtateComponent } from './secure/make-esimtate/make-esimtate.component';
import { NewPasswordComponent } from './public/auth/newpassword/newpassword.component';
import { LoginComponent } from './public/auth/login/login.component';
import { LogoutComponent, RegistrationConfirmationComponent } from './public/auth/confirm/confirmRegistration.component';
import { ResendCodeComponent } from './public/auth/resend/resendCode.component';
import { ForgotPasswordStep1Component, ForgotPassword2Component } from './public/auth/forgot/forgotPassword.component';
import { RegisterComponent } from './public/auth/register/registration.component';
import { MFAComponent } from './public/auth/mfa/mfa.component';
import { HomeLandingComponent, HomeComponent } from './public/home.component';
import { CognitoUtil } from './service/cognito.service';
import { AwsUtil } from './service/aws.service';
import { UserRegistrationService } from './service/user-registration.service';
import { UserLoginService } from './service/user-login.service';
import { UserParametersService } from './service/user-parameters.service';
import { SecureHomeComponent } from './secure/landing/securehome.component';
import { ApprovalComponent } from './secure/approval/approval.component';


@NgModule({
  declarations: [
    NewPasswordComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationConfirmationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPassword2Component,
    RegisterComponent,
    MFAComponent,
    HomeLandingComponent,
    HomeComponent,
    SecureHomeComponent,
    EstimateComponent,
    MakeEsimtateComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    ApprovalComponent,
    AppComponent
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
  providers: [
    CognitoUtil,
    AwsUtil,
    UserRegistrationService,
    UserLoginService,
    UserParametersService,
    DataService,
    HotTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
