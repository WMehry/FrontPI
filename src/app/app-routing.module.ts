import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './login/login.component';
//-------------------hedi---------------------------------------
import { ListBlogComponent } from './Blog/list-blog/list-blog.component';
import { ListBlogbackComponent } from './Blog/list-blogback/list-blogback.component';
import { UpdateBlogComponent } from './Blog/update-blog/update-blog.component';
import { AddBlogComponent } from './Blog/add-blog/add-blog.component'
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { ListTournoiComponent } from './Tournoi/list-tournoi/list-tournoi.component';
import { AddTournoiComponent } from './Tournoi/add-tournoi/add-tournoi.component';
import { DetailtournoiComponent } from './Tournoi/detailtournoi/detailtournoi.component';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';



const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'login', component: LoginComponent},
  

  { path :'listblog', component: ListBlogComponent},
  { path :'blogdetails/:id', component: BlogDetailsComponent},
  { path :'addblog', component: AddBlogComponent},
  { path :'updateBlog/:id', component: UpdateBlogComponent},
  { path :'listBlogback', component: ListBlogbackComponent},
  { path : 'tournois', component:ListTournoiComponent},
  { path :'addtournoi', component: AddTournoiComponent},
  { path :'detailtournoi/:id',component: DetailtournoiComponent},
  











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
