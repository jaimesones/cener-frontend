import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {AboutComponent} from "./about/about.component";
import {RetailComponent} from './retail/retail.component';
import {CenerAComponent} from './ceners/cener-a/cener-a.component';
import {CenerBComponent} from './ceners/cener-b/cener-b.component';
import {CenerCComponent} from './ceners/cener-c/cener-c.component';

import {ContactComponent} from './contact/contact.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {CpanelModule} from './cpanel/cpanel.module';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      {path: '', component: RetailComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'paracuellos', component: CenerAComponent},
      {path: 'majadahonda', component: CenerBComponent},
      {path: 'algete', component: CenerCComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'cpanel', loadChildren: () => CpanelModule},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
