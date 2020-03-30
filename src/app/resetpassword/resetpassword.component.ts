import { Component, OnInit } from '@angular/core';
import { Reset } from '../data/reset';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

import { MatSnackBar, 
  MatSnackBarConfig, 
  MatSnackBarHorizontalPosition, 
  MatSnackBarVerticalPosition } from '@angular/material';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private loginservice:LoginService,public snackbar:MatSnackBar) { }

  ngOnInit() {
  }
resetPassword:Reset=
{
  password:'',
  confirmpassword:'',
  emp_id:null  
};
smessage: string = 'Password has been Set';
actionButtonLabel: string = 'Close';
action: boolean = true;
setAutoHide: boolean = true;
autoHide: number = 2000;
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';

errorStatus=false;
errorStatusMessage="";

passwordStatus=false;
passswordStatusMessage="nil";
onConfirm(form:NgForm)
{
  console.log('Here to set your password');
    if(!(this.resetPassword.password === this.resetPassword.confirmpassword))
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
      this.loginservice.resetthePassword(this.resetPassword,this.resetPassword.emp_id).subscribe (
        result=>console.log("Password reset successfully"),
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
