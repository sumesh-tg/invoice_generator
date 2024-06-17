import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'firebase/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { CalendarComponent } from './components/dashboard/widgets/calendar/calendar.component';
import { WidgetActivityComponent } from './components/dashboard/widgets/widget-activity/widget-activity.component';
import { WidgetPendingInvoicesComponent } from './components/dashboard/widgets/widget-pending-invoices/widget-pending-invoices.component';
import { WidgetPurchaseHistoryComponent } from './components/dashboard/widgets/widget-purchase-history/widget-purchase-history.component';
import { WidgetRecentCustomersComponent } from './components/dashboard/widgets/widget-recent-customers/widget-recent-customers.component';
import { WidgetReportsComponent } from './components/dashboard/widgets/widget-reports/widget-reports.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/dashboard/body/home/home.component';
import { CustomerComponent } from './components/dashboard/body/customer/customer.component';
import { ProductsComponent } from './components/dashboard/body/products/products.component';
import { CreateInvoiceComponent } from './components/dashboard/body/create-invoice/create-invoice.component';
import { ListInvoiceComponent } from './components/dashboard/body/list-invoice/list-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RegistrationComponent,
    CalendarComponent,
    WidgetPurchaseHistoryComponent,
    WidgetActivityComponent,
    WidgetPendingInvoicesComponent,
    WidgetRecentCustomersComponent,
    WidgetReportsComponent,
    HomeComponent,
    CustomerComponent,
    ProductsComponent,
    CreateInvoiceComponent,
    ListInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
