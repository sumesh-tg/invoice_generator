import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'firebase/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/dashboard/body/body.component';
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
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
