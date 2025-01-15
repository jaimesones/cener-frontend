import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'home', // Mantenemos 'home' en la raíz
    loadChildren: () => import('./pages/home.module').then(module => module.HomeModule) 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirección a /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
