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


@NgModule({
  declarations: [
    AppComponent,    
    NotFoundComponent,
    LoginComponent,
    BackgroundComponent,
    NavbarComponent,
    LeaveComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   HttpClientModule,
   MaterialModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
