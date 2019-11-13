import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { BackgroundComponent } from './background/background.component';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
 { path:'login',component: LoginComponent },
 { path:'bg',component: BackgroundComponent }, 
 { path: '404', component : NotFoundComponent},
 { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
