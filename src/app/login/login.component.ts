import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {UserLogin} from '../data/login';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginservice:LoginService) { }
employeeLogin:UserLogin = {

    username: '',
    password: '',
    granttype:'password'
};

errorStatus = false;
errorMessage = '';
  ngOnInit() {
  }
  onSubmit(loginpage :NgForm){
    console.log('login click works');
    if(loginpage.valid)
    {
      console.log("form valid");
      this.loginservice.inLoginPage(this.employeeLogin);
    }
    else
    {
      this.errorStatus = true;
      this.errorMessage = 'Error Encountered';
    }
  }

}
