import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

//-------------------hedi---------------------------------------

import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { HomeComponent } from './shared/home/home.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navcon', component: NavbarconnectedComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgotPwdComponent },
  { path: 'adminges', component: GestionAdminComponent },

  // ------------------------------------------paths hedi-------------------------------------

  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
