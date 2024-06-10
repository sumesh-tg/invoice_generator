import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { CalendarComponent } from './components/dashboard/widgets/calendar/calendar.component';
import { WidgetPurchaseHistoryComponent } from './components/dashboard/widgets/widget-purchase-history/widget-purchase-history.component';
import { WidgetActivityComponent } from './components/dashboard/widgets/widget-activity/widget-activity.component';
import { WidgetPendingInvoicesComponent } from './components/dashboard/widgets/widget-pending-invoices/widget-pending-invoices.component';
import { WidgetRecentCustomersComponent } from './components/dashboard/widgets/widget-recent-customers/widget-recent-customers.component';
import { WidgetReportsComponent } from './components/dashboard/widgets/widget-reports/widget-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent,
    RegistrationComponent,
    CalendarComponent,
    WidgetPurchaseHistoryComponent,
    WidgetActivityComponent,
    WidgetPendingInvoicesComponent,
    WidgetRecentCustomersComponent,
    WidgetReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
