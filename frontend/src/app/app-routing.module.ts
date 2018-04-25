import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EstimateComponent } from './estimate/estimate.component';
import { LoginComponent } from './login/login.component';
import { MakeEsimtateComponent } from './make-esimtate/make-esimtate.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'estimate', component: EstimateComponent },
  { path: 'makeEstimate/:taskId', component: MakeEsimtateComponent},
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}