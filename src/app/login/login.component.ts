import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {UserLogin} from '../data/login';
import { NgForm, FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

empLogin: UserLogin =
{
  username:'',
  password:'',  
  granttype:'password',
  
}
empID = null;
errorStatus = false;
errorMessage = '';

  constructor(private router: Router,private loginservice:LoginService) { }
  ngOnInit() {
    
  }


  onHttpError(error: any) {
    console.log('error:', error);
    this.errorStatus = true;
    this.errorMessage = error.error.error;
    console.log(this.errorMessage);
  }

 /* onSubmit(form:NgForm)
  {
    this.authservice.login(this.empLogin).subscribe(
      data=>{
        this.tokenparams = data;
        this.authservice.AccessToken = this.tokenparams.access_token;
        this.router.navigate(['/bg']);
      }

    )
  }*/

  onSubmit(form:NgForm)
  {
    console.log(this.empLogin);    
      this.loginservice.inLoginPage(this.empLogin).subscribe(
      result=>{
      console.log(result);
      localStorage.setItem('token',result.access_token);
      
      this.router.navigate(['/dashboard']);
    },
      error=>this.onHttpError(error)
    );

    this.loginservice.getEmpID(this.empLogin.username).subscribe(
      result=>{
        console.log(result);
        localStorage.setItem('empid',result);
        
      }
    );
   
 
  }
  redirect()
  {
    this.router.navigate(['/forgotpassword']);
  }
    /*this.getLoginValues();
    console.log('login click works');

    if(this.loginPage.valid)
    {
      console.log("Valid!!!");
      this.loginservice.inLoginPage(this.employeeLogin).subscribe (
      result=>{
      localStorage.setItem('token',result);
      this.router.navigate(['/addemployee']);
    },
    error=>this.onHttpError(error))
     
    }
    else
    {
      this.errorStatus=true;
      this.errorMessage="Errors Encountered";
    }*/
  }  


    
  


