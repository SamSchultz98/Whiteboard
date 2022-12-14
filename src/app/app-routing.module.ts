import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Misc/home/home.component';
import { AboutComponent } from './Misc/about/about.component';
import { E404Component } from './Misc/e404/e404.component';

const routes: Routes = [
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"**",component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
