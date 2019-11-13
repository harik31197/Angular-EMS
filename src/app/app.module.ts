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


@NgModule({
  declarations: [
    AppComponent,    
    NotFoundComponent,
    LoginComponent
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
