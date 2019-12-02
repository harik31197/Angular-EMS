import { Component, OnInit } from '@angular/core';
import{Leave} from '../data/leave';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';
import * as moment from 'moment';

export interface LeaveType
{
 key:string;
  value:number;
}
export interface SessionType
{
 key:string;
  value:number;
}
declare var require: any;
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})


export class LeaveComponent implements OnInit {

  leaveType:Array<LeaveType> = [
   {key:'Sick Leave',value:201},
   {key:'Casual Leave',value:202},
   {key:'Priviledge Leave',value:203},
  ];

  sessionType:Array<SessionType> = [
    {key:'Session 1', value:1},
    {key:'Session 2',value:2},
  ];
  
  constructor(private http:HttpClient,private route:ActivatedRoute,private httpservice:HttpClient,private loginservice:LoginService) { }

  isUser = localStorage.getItem('empid');
  days:0;
  balance:0;
  leaveTypes = ['Sicck Leave','Casual Leave','Priviledged Leave'];
  leaveIds = [201,202,203];
  sessionIds=[1,2];

  applyLeave:Leave =
   {
     leave_type:'Sicck Leave',
    from_date:new Date(),
    to_date:new Date(),
    from_session:null,
    to_session:null,
    leave_description:'',     
    leave_type_type_id:1,  
    apply_to:''
  };

errorStatus = false;
errorMessage = '';

sickLeaveStatus = false;
sickLeaveMessage = '';

dateValidStatus = false;
dateValidMessage = '';

onHttpError(error: any) {
  console.log('error:', error);
  this.errorStatus = true;
  this.errorMessage = 'error occured';
  console.log(this.errorMessage);
}
ngOnInit() 
  {
    /*this.leaveForm = this.formBuilder.group({
      from_date:['',Validators.required],
      toDate:['',Validators.required],
      fromSession:['',Validators.required],
      reason:['',Validators.required],
      status:['',Validators.required],
      submitdate:['',Validators.required],
      applyto:['',Validators.required]
    });*/
  }
  

onApply(leaveform:NgForm)
{   
  console.log(this.applyLeave);
  this.loginservice.postLeaveForm(this.applyLeave).subscribe(
    result=>console.log('Leave Applied',result),    
    error=>this.onHttpError(error)
    );
  }
    


  /*var sickStatus = this.isSickLeaveValid(this.applyLeave.from_date,this.applyLeave.leave_type);
  if(sickStatus)
  {
    this.sickLeaveStatus=true;
    this.sickLeaveMessage='Sick Leave Cannot be applied in advance';
  }
  else{
    this.sickLeaveStatus=false;
  }
  var dateStatus = this.areDatesValid(this.applyLeave.from_date,this.applyLeave.to_date);
  if(dateStatus)
  {
    this.dateValidStatus=true;
    this.dateValidMessage='From Date cannot be after To Date';
  }
  else
  {
    this.dateValidStatus = false;
  }*/
 


  
   
  /* isSickLeaveValid(fromdate:Date,typeofleave:String)
{
  var fulldate = moment(new Date(), 'YYYY-MM-DD');
  var datetoday =moment.parseZone(fulldate).format('YYYY-MM-DD');
  if ((typeofleave.localeCompare('Sick Leave') == 0) && (moment(fromdate).isAfter(datetoday))) {
     
    return true;
  }

  else
   {
    return false;
  }
}
areDatesValid(fromdate:Date,todate:Date)
{
  if(moment(fromdate).isAfter(todate))
  {
    return true;

  }
  else
  {
    return false;
  }
}
noofDays(leaveApplied:Leave)
{
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var diffdays=Math.abs((leaveApplied.from_date.getTime() - leaveApplied.to_date.getTime())/(oneDay));
  this.applyLeave.days = diffdays;
}
getBalance()
{
  var eid = parseInt(this.isUser);
  this.httpservice.get<any>('https://localhost:44374/api/leave/'+eid+this+this.leaveType.values)


}*/
 }

 


