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


import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';



import { DisplayOfferComponent } from './display-offer/display-offer.component';
import { ListOfferComponent } from './dashboard/list-offer/list-offer.component';
import { ListRequestsComponent } from './dashboard/list-requests/list-requests.component';
import { ListAmortizationComponent } from './dashboard/list-amortization/list-amortization.component';
import { AuthServiceService } from './services/auth-service.service';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { ContentComponent } from './dashboard/content/content.component';
import { FooterDashComponent } from './dashboard/footer-dash/footer-dash.component';
import { OfferLoanService } from './services/offer-loan.service';
import { RequestLoanService } from './services/request-loan.service';
import { AmortizationService } from './services/amortization.service';
import { SimilatorComponent } from './similator/similator.component';
import { RequestLoanComponent } from './shared/request-loan/request-loan.component';
import { AddtionalinfoComponent } from './shared/addtionalinfo/addtionalinfo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AbonnementhomeComponent } from './abonnementhome/abonnementhome.component';
import { ValidateProjectComponent } from './Project/validate-project/validate-project.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { DisplayProjectComponent } from './Project/display-project/display-project.component';
import { StatisticsComponent } from './dashboard/statistics/statistics.component';
import { ProjectService } from './services/project.service';
import { CategoryAnalysisComponent } from './Project/category-analysis/category-analysis.component';
import { AverageInvestmentValueComponent } from './Project/average-investment-value/average-investment-value.component';
import { DTCurrencyPipe } from './pipes/dt-currency.pipe';
import { HighestLowestInvestmentsComponent } from './Project/highest-lowest-investments/highest-lowest-investments.component';
import { ListEventComponent } from './Event/list-event/list-event.component';
import { AddEventComponent } from './Event/add-event/add-event.component';
import { SimilatorMonthlyComponent } from './similator-monthly/similator-monthly.component';
import { EventService } from './services/event.service';
import { ShareholderService } from './services/shareholder.service';
import { DetailsEventComponent } from './details-event/details-event.component';
import { EventListComponentAdmin } from './event-list/event-list.componentAdmin';
import {ShareholderListComponent} from './shareholder-list/shareholder-list.component';
import { ShareholderListComponentAdmin } from './shareholder-list/shareholder-list.componentAdmin';
import { DetailsShareholderComponent } from './details-shareholder/details-shareholder.component';
import { AddshareholderComponent } from './add-shareholder/add-shareholder.component';
import { CommonModule } from '@angular/common';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateShareholderComponent } from './update-shareholder/update-shareholder.component';
import { EventListComponent } from './event-list/event-list.component';
import { AssignShareholderComponent } from './event-list/assign-shareholder.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { EventStatisticsComponent } from './event-list/EventStatisticsComponent';


@NgModule({
  declarations: [
    AppComponent,
    DivHomeComponent,
    SporthomeComponent,
    NavbarComponent,
    FooterComponent,

    NavbarconnectedComponent,
    HomeComponent,
    DisplayOfferComponent,
    LoginComponent,
    RegisterComponent, 
    ForgotPwdComponent,

    SidemenuComponent,
    ListOfferComponent,
    ListRequestsComponent,
    ListAmortizationComponent,
    SimilatorComponent,
    ContentComponent,
    FooterDashComponent,
    RequestLoanComponent,
    AddtionalinfoComponent,
    NotFoundComponent,

    ProjectService,
    AbonnementhomeComponent,
    ValidateProjectComponent,
    AddProjectComponent,
    DisplayProjectComponent,
    StatisticsComponent,
    CategoryAnalysisComponent,
    AverageInvestmentValueComponent,
    DTCurrencyPipe,
    HighestLowestInvestmentsComponent,
    SimilatorMonthlyComponent,
    AddEventComponent,
    AddshareholderComponent ,
    DetailsEventComponent,
    EventListComponentAdmin,
    ShareholderListComponent,
    ShareholderListComponentAdmin,
    DetailsShareholderComponent,
    UpdateEventComponent,
    UpdateShareholderComponent,
    EventListComponent, 
    AssignShareholderComponent,
    EventStatisticsComponent,
    ListEventComponent,

    
  ],
    

    

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    Ng2GoogleChartsModule,
    NgxPaginationModule,
    NgxPaginationModule,

  ],


  providers: [
              AuthServiceService,
              TokenStorageServiceService,
              OfferLoanService,
              RequestLoanService,
              AmortizationService,
              ShareholderService,
              EventService,
              ReactiveFormsModule,

              ProjectService],

  bootstrap: [AppComponent]
})
export class AppModule { }
