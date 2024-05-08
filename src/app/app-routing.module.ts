import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { RegisterComponent } from './register/register.component';
import { NavbarconnectedComponent } from './shared/navbarconnected/navbarconnected.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { TableComponent } from './dashboard/table/table.component';
import { SimilatorComponent } from './similator/similator.component';
import { ListOfferComponent } from './dashboard/list-offer/list-offer.component';
import { ListRequestsComponent } from './dashboard/list-requests/list-requests.component';
import { ListAmortizationComponent } from './dashboard/list-amortization/list-amortization.component';
import { ContentComponent } from './dashboard/content/content.component';
import { Form2Component } from './dashboard/form2/form2.component';
import { FormVerticaleComponent } from './dashboard/form-verticale/form-verticale.component';
import { RequestLoanComponent } from './shared/request-loan/request-loan.component';
import { AddtionalinfoComponent } from './shared/addtionalinfo/addtionalinfo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'navcon', component: NavbarconnectedComponent },
  { path: 'forget', component: ForgotPwdComponent },
  
  // -----------------------------------------front ------------------------------------
  { path: 'home', component: HomeComponent},
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
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
