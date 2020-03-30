import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { BackgroundComponent } from './background/background.component';
import { LeaveComponent } from './leave/leave.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { VerifyemployeeComponent } from './verifyemployee/verifyemployee.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
 { path:'login',component: LoginComponent },
 { path:'bg',component: BackgroundComponent }, 
 { path: '404', component : NotFoundComponent},
 { path: 'leave', component : LeaveComponent},
 { path: 'addemployee', component : AddemployeeComponent},
 { path: 'attendance', component : AttendanceComponent},
 { path: 'VerifyAccount/:id', component : VerifyemployeeComponent},
 { path: 'forgotpassword', component : ForgotpasswordComponent},
 { path: 'dashboard',component : DashboardComponent},
 { path: 'resetpassword/:id',component : ResetpasswordComponent},
 { path: 'landingpage',component : LandingPageComponent},
{ path: '**', redirectTo: '/error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
