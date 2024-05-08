import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BlogServiceService } from './Blog/blog-service.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DivHomeComponent } from './div-home/div-home.component';
import { SporthomeComponent } from './sporthome/sporthome.component';
import { StadehomeComponent } from './stadehome/stadehome.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { LoginComponent } from './login/login.component';
import { AddCommentaireComponent } from './Commentaire/add-commentaire/add-commentaire.component';
import { HomeComponent } from './shared/home/home.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { TableComponent } from './dashboard/table/table.component';
import { CalendrierEventsComponent } from './dashboard/calendrier-events/calendrier-events.component';
import { StaticsCircleComponent } from './dashboard/statics-circle/statics-circle.component';
import { StaticsBarsVComponent } from './dashboard/statics-bars-v/statics-bars-v.component';
import { StaticsBarsHComponent } from './dashboard/statics-bars-h/statics-bars-h.component';
import { Form2Component } from './dashboard/form2/form2.component';
import { FormVerticaleComponent } from './dashboard/form-verticale/form-verticale.component';
import { FormHorizontalComponent } from './dashboard/form-horizontal/form-horizontal.component';
import { RegisterComponent } from './register/register.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { DisplayOfferComponent } from './display-offer/display-offer.component';
import { ListOfferComponent } from './dashboard/list-offer/list-offer.component';
import { ListRequestsComponent } from './dashboard/list-requests/list-requests.component';
import { ListAmortizationComponent } from './dashboard/list-amortization/list-amortization.component';
import { AuthServiceService } from './services/auth-service.service';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { SimilatorMonthlyComponent } from './similator-monthly/similator-monthly.component';
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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DivHomeComponent,
    SporthomeComponent,
    StadehomeComponent,
    DisplayOfferComponent,
    BlogDetailsComponent,
    NavbarconnectedComponent,
    LoginComponent,
    AddCommentaireComponent,
    HomeComponent,
    UpdateBlogComponent,
    SidemenuComponent,
    TableComponent,
    CalendrierEventsComponent,
    StaticsCircleComponent,
    StaticsBarsVComponent,
    StaticsBarsHComponent,
    Form2Component,
    FormVerticaleComponent,
    FormHorizontalComponent,
    RegisterComponent,
    ListBlogbackComponent,
    ListBlogComponent,
    AddBlogComponent,
    ForgotPwdComponent,
    ListOfferComponent,
    ListRequestsComponent,
    ListAmortizationComponent,
    SimilatorMonthlyComponent,
    AbonnementhomeComponent,
    ValidateProjectComponent,
    AddProjectComponent,
    DisplayProjectComponent,
    StatisticsComponent,
    CategoryAnalysisComponent,
    AverageInvestmentValueComponent,
    DTCurrencyPipe,
    HighestLowestInvestmentsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [BlogServiceService,
              AuthServiceService,
              TokenStorageServiceService,
              ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
