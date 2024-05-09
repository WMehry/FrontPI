import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivHomeComponent } from './div-home/div-home.component';
import { SporthomeComponent } from './sporthome/sporthome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { HomeComponent } from './shared/home/home.component';
import { CalendrierEventsComponent } from './dashboard/calendrier-events/calendrier-events.component';
import { FormHorizontalComponent } from './dashboard/form-horizontal/form-horizontal.component';
import { FormVerticaleComponent } from './dashboard/form-verticale/form-verticale.component';
import { Form2Component } from './dashboard/form2/form2.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { StaticsBarsHComponent } from './dashboard/statics-bars-h/statics-bars-h.component';
import { StaticsBarsVComponent } from './dashboard/statics-bars-v/statics-bars-v.component';
import { StaticsCircleComponent } from './dashboard/statics-circle/statics-circle.component';
import { TableComponent } from './dashboard/table/table.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DivHomeComponent,
    SporthomeComponent,
    NavbarComponent,
    FooterComponent,
    NavbarconnectedComponent,
    HomeComponent,

    LoginComponent,
    RegisterComponent, 
    ForgotPwdComponent,
    CalendrierEventsComponent,
    FormHorizontalComponent,
    FormVerticaleComponent,
    Form2Component,
    SidemenuComponent,
    StaticsBarsHComponent,
    StaticsBarsVComponent,
    StaticsCircleComponent,
    TableComponent,
    DashboardComponent,
    GestionAdminComponent,
    

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
