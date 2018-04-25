import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';

import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { EstimateComponent } from './secure/estimate/estimate.component';
//import { LoginComponent } from './public/login/login.component';

import { MakeEsimtateComponent } from './secure/make-esimtate/make-esimtate.component';
import { AppComponent } from './app.component';
import { HomeComponent, HomeLandingComponent } from './public/home.component';
import { LoginComponent } from './public/auth/login/login.component';
import { RegisterComponent } from './public/auth/register/registration.component';
import { RegistrationConfirmationComponent, LogoutComponent } from './public/auth/confirm/confirmRegistration.component';
import { ResendCodeComponent } from './public/auth/resend/resendCode.component';
import { ForgotPassword2Component, ForgotPasswordStep1Component } from './public/auth/forgot/forgotPassword.component';
import { NewPasswordComponent } from './public/auth/newpassword/newpassword.component';
import { SecureHomeComponent } from './secure/landing/securehome.component';

const homeRoutes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent,
      children: [
          {path: 'login', component: LoginComponent},
          {path: 'register', component: RegisterComponent},
          {path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent},
          {path: 'resendCode', component: ResendCodeComponent},
          {path: 'forgotPassword/:email', component: ForgotPassword2Component},
          {path: 'forgotPassword', component: ForgotPasswordStep1Component},
          {path: 'newPassword', component: NewPasswordComponent},
          {path: '', component: HomeLandingComponent}
      ]
  },
];


const secureHomeRoutes: Routes = [
  {

      path: '',
      redirectTo: '/securehome',
      pathMatch: 'full'
  },
  {
      path: 'securehome', component: SecureHomeComponent, children: [
        { path: 'logout', component: LogoutComponent},
        { path: 'dashboard', component: DashboardComponent },
        { path: 'estimate', component: EstimateComponent },
        { path: 'makeEstimate/:taskId', component: MakeEsimtateComponent},
      ]
  }
];

const routes: Routes = [
  {
      path: '',
      children: [
          ...homeRoutes,
          ...secureHomeRoutes,
          {
              path: '',
              component: HomeComponent
          }
      ]
  },


];

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}