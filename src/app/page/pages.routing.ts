import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RxJsComponent } from './rx-js/rx-js.component';

const routes: Routes = [
  { 
    path: 'dashboard' ,
    component: PagesComponent,
    children: [
      { path: '' ,component: DashboardComponent, data:{ titulo: 'Dashboard'} },
      { path: 'progress',component: ProgressComponent, data:{ titulo: 'ProgressBar'}},
      { path: 'grafica1', component: Grafica1Component, data:{ titulo: 'Grafica #1'}},
      { path: 'account-settings', component: AccountSettingsComponent, data:{ titulo: 'Ajustes de cuenta'}},
      { path: 'promesas', component: PromesasComponent, data:{ titulo: 'Promesas'}},
      { path: 'rxjs', component: RxJsComponent, data:{ titulo: 'RxJs'}},
      { path: 'paises', component: RegistrarseComponent, data:{ titulo: 'Paises'}},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
