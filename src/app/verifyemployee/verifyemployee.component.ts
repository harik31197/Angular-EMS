import { Component, OnInit } from '@angular/core';
import { VerifyEmployee } from '../data/verifyemployee';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';


@Component({
  selector: 'app-verifyemployee',
  templateUrl: './verifyemployee.component.html',
  styleUrls: ['./verifyemployee.component.css']
})
export class VerifyemployeeComponent implements OnInit {

  smessage: string = 'Employee Added';
  actionButtonLabel: string = 'Close';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  

  empInstance:VerifyEmployee = 
  {
    password:'',
    confirmpassword: '',
    emp_id:null
  };

  errorStatus=false;
  errorStatusMessage=""

  passwordStatus=false;
  passswordStatusMessage="nil";

  constructor(private loginservice:LoginService,private snackbar:MatSnackBar) { }

  

  ngOnInit() {
  }

  onConfirm(form:NgForm)
  {
    console.log('Here to set your password');
    if(!(this.empInstance.password === this.empInstance.confirmpassword))
    {
     this.passwordStatus = false;
     this.passswordStatusMessage ="Password and Confirmpassword dont match";
    }
    else
    {
      this.passwordStatus=false;
      this.passswordStatusMessage='';
    }
    if(form.valid && !(this.passwordStatus))
    {
      
      this.loginservice.verifyAccount(this.empInstance,this.empInstance.emp_id).subscribe(
        result=>console.log('verified and password added'),
        error=>this.onHttpError(error)
      );  
      let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this.snackbar.open(this.smessage, this.action ? this.actionButtonLabel : undefined, config);
    form.resetForm();      
  }
  
}

onHttpError(errorResponse:any)
  {
  console.log('error: ',errorResponse);
  this.errorStatus=true;
  this.errorStatusMessage=errorResponse.error.error;  
  }
}
