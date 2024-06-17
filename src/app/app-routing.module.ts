import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/dashboard/body/home/home.component';
import { CustomerComponent } from './components/dashboard/body/customer/customer.component';
import { ProductsComponent } from './components/dashboard/body/products/products.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] ,children:[
    {path:"",component:HomeComponent, pathMatch: "full"},
    {path:"customer",component:CustomerComponent},
    {path:"products",component:ProductsComponent},
  ]},
  { path: "login", component: LoginComponent },
  { path: "registration", component: RegistrationComponent },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [{ LoginComponent, DashboardComponent }];
