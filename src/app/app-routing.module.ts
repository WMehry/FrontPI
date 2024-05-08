import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';



//-------------------wissal---------------------------------------
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';

import { SimilatorComponent } from './similator/similator.component';
import { ListOfferComponent } from './dashboard/list-offer/list-offer.component';
import { ListRequestsComponent } from './dashboard/list-requests/list-requests.component';
import { ListAmortizationComponent } from './dashboard/list-amortization/list-amortization.component';
import { ContentComponent } from './dashboard/content/content.component';

import { RequestLoanComponent } from './shared/request-loan/request-loan.component';
import { AddtionalinfoComponent } from './shared/addtionalinfo/addtionalinfo.component';
import { NotFoundComponent } from './not-found/not-found.component';


//-------------------wassim---------------------------------------

import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { HomeComponent } from './shared/home/home.component';

//-------------------chaima---------------------------------------
import { DisplayProjectComponent } from './Project/display-project/display-project.component';
import { ValidateProjectComponent } from './Project/validate-project/validate-project.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { AbonnementhomeComponent } from './abonnementhome/abonnementhome.component';

//-------------------sarah---------------------------------------


import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventListComponentAdmin } from './event-list/event-list.componentAdmin';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DetailsShareholderComponent } from './details-shareholder/details-shareholder.component';
import { ShareholderListComponent } from './shareholder-list/shareholder-list.component';
import { AddshareholderComponent } from './add-shareholder/add-shareholder.component';
import { UpdateShareholderComponent } from './update-shareholder/update-shareholder.component';
import { ShareholderListComponentAdmin } from './shareholder-list/shareholder-list.componentAdmin';
import { DetailsEventComponent } from './details-event/details-event.component';
import { AssignShareholderComponent } from './event-list/assign-shareholder.component';
import { EventStatisticsComponent } from './event-list/EventStatisticsComponent';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },


  { path: 'navcon', component: NavbarconnectedComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgotPwdComponent },

  // ------------------------------------------paths hedi-------------------------------------

  // { path :'', component: },
  { path: 'offer/:idOffer', component: SimilatorComponent},
  { path: 'content', component: ContentComponent },
  { path: 'request/:id', component: RequestLoanComponent },
  { path: 'info', component: AddtionalinfoComponent },


  // -----------------------------------------back ------------------------------------
  { path: 'content', component: ContentComponent },
  { path: 'side', component: SidemenuComponent},
  { path: 'listoffer',component:ListOfferComponent},
  { path: 'listAmort',component:ListAmortizationComponent},
  { path: 'listrequests',component:ListRequestsComponent},
 
  { path: '**', component: NotFoundComponent },


  { path: 'listProject', component: DisplayProjectComponent },
  { path: 'validateProject', component: ValidateProjectComponent },
  { path: 'AddProject', component: AddProjectComponent },
  { path: 'projectList', component: AbonnementhomeComponent },



  {
    path: 'AddShareholder', component:AddshareholderComponent
   
  },
  {
    path: 'AddEvent', component:AddEventComponent
   
  },

  { path: 'detailsEvent/:id', component: DetailsEventComponent },
  

  { path: 'detailsShareholder/:id', component: DetailsShareholderComponent },



  { path: 'UpdateEvent/:id', component: UpdateEventComponent },
  {
  path:'assign-shareholder/:idEvent',
  component: AssignShareholderComponent
},


  { path: 'updateShareholder/:id', component: UpdateShareholderComponent },

  {
    path: 'Event', component:EventListComponent
   
  },
 
  {
    path: 'Shareholder', component:ShareholderListComponent
   
  },
  {
    path: 'ShareholderAdmin', component:ShareholderListComponentAdmin
   
  },
  {
    path: 'AdminEvent', component:EventListComponentAdmin
   
  },
  {
    path: 'EventStatistics', component:EventStatisticsComponent
   
  },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
