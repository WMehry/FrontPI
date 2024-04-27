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
import { ReservationTerrainComponent } from './reservation-terrain/reservation-terrain.component';
import { TerrainComponent } from './terrain/terrain.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddTerrainComponent } from './add-terrain/add-terrain.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';
// import {  } from '';



const routes: Routes = [
  { path :'',redirectTo:'home',pathMatch:'full'},
  { path :'home', component: HomeComponent},
  //{ path :'addReservation', component: ReservationTerrainComponent},
  { path :'login', component: LoginComponent},


  //----------------------------------Path yassin------------------------------
   {path:'terrains',component:TerrainComponent},
   {path:'reservationTerrain',component:ReservationTerrainComponent},
   {path:'equipes',component:EquipeComponent},
   {path:'addterrains',component:AddTerrainComponent},
   {path:'updateterrain/:numTerrain',component:UpdateTerrainComponent},





  // ------------------------------------------paths hedi-------------------------------------
  { path :'listblog', component: ListBlogComponent},
  { path :'blogdetails/:id', component: BlogDetailsComponent},
  { path :'addblog', component: AddBlogComponent},
  { path :'updateBlog/:id', component: UpdateBlogComponent},
  { path :'listBlogback', component: ListBlogbackComponent},
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  // { path :'', component: },
  











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
