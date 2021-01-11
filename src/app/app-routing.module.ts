import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/commun/components/home/home.component';
import {InsurancesComponent} from './modules/insurances/components/insurances/insurances.component';
import {LoginComponent} from './modules/authentication/components/login/login.component';
import {AboutComponent} from './modules/commun/components/about/about.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'insurances',
    component:InsurancesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
