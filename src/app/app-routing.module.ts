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
import { SimilatorMonthlyComponent } from './similator-monthly/similator-monthly.component';
import { DisplayProjectComponent } from './Project/display-project/display-project.component';
import { ValidateProjectComponent } from './Project/validate-project/validate-project.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { AbonnementhomeComponent } from './abonnementhome/abonnementhome.component';

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
  { path: 'listProject', component: DisplayProjectComponent },
  { path: 'validateProject', component: ValidateProjectComponent },
  { path: 'AddProject', component: AddProjectComponent },
  { path: 'projectList', component: AbonnementhomeComponent },
 // { path: 'listblog', component: ListBlogComponent },
  { path: 'blogdetails/:id', component: BlogDetailsComponent },
  { path: 'addblog', component: AddBlogComponent },
  { path: 'updateBlog/:id', component: UpdateBlogComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
