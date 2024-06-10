import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"dashboard" , component :DashboardComponent},
  {path:"login" , component :LoginComponent},
  {path:"registration" , component :RegistrationComponent},
]
  

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[{LoginComponent,DashboardComponent}];
