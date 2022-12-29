import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { NoPageFoundComponent } from './page/no-page-found/no-page-found.component';
import { PagesComponent } from './page/pages.component';
import { ProgressComponent } from './page/progress/progress.component';

const routes: Routes = [
  { 
    path: '' ,
    component: PagesComponent,
    children: [
      { path: 'dashboard' ,component: DashboardComponent },
      { path: 'progress',component: ProgressComponent},
      { path: 'grafica1', component: Grafica1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]},

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
