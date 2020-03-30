import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './background/background.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaveComponent } from './leave/leave.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { VerifyemployeeComponent } from './verifyemployee/verifyemployee.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,    
    NotFoundComponent,
    LoginComponent,
    BackgroundComponent,
    NavbarComponent,
    LeaveComponent,
    AddemployeeComponent,    
    AttendanceComponent,  
    VerifyemployeeComponent,  
    ForgotpasswordComponent, 
    DashboardComponent, 
    ResetpasswordComponent, LandingPageComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,  
   HttpClientModule,
   MaterialModule,
   ReactiveFormsModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
