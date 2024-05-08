import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';


import { RegisterComponent } from './register/register.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { TableComponent } from './dashboard/table/table.component';
import { SimilatorMonthlyComponent } from './similator-monthly/similator-monthly.component';
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
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navcon', component: NavbarconnectedComponent },//??
  { path: 'forget', component: ForgotPwdComponent },
  { path: 'side', component: SidemenuComponent },// ?? side
  {path: 'similator', component:SimilatorMonthlyComponent},

  // -----------------------------------------back ------------------------------------

  { path: 'table', component: TableComponent },

  {
    path: 'AddShareholder', component:AddshareholderComponent
   
  },
  {
    path: 'AddEvent', component:AddEventComponent
   
  },

  { path: 'detailsEvent/:id', component: DetailsEventComponent },

  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  //{ path :'addReservation', component: ReservationTerrainComponent},
  { path :'login', component: LoginComponent},
  


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

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
