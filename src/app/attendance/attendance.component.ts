import { Component, OnInit } from '@angular/core';
import {Attendance} from '../data/attendance';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  isAdmin = localStorage.getItem('empid');
  constructor(private httpService: HttpClient,private router:Router) { }
  

  //columnDisplay:string[] = ['id','date','firstin','lastout','status'];
  //dataSource: any;
  
  attendance:any[];
  tempAttendance:any=[];  
  sempid:string;
  eid:number;
  filters=['Present','On Leave','None'];
  public searchText: string;
  isEmpty:boolean;

  ngOnInit()
{
    this.getAttendance();    
}

getAttendance()
{
  if(this.isAdmin==null)
    this.router.navigate(['/404']);
    
     this.sempid=localStorage.getItem('empid');
     this.eid=parseInt(this.sempid);
    console.log(this.eid);
    this.httpService.get<Attendance[]>('https://localhost:44374/api/attendance/'+this.eid).subscribe(  
      (result: any) => {
        (result.forEach(element => {
          this.tempAttendance.push(element);
        }),
          error => console.log(error)
        )
       // console.log(this.attendance.length);
        console.log(this.tempAttendance.length);
        this.attendance = this.tempAttendance;
        this.isEmpty = this.attendance.length == 0 ? true:false;    
        console.log(this.isEmpty);
      }
     
    );
    
    
   
   
    this.sempid='';
    this.eid=null;    
}

track()
    {
      this.attendance.forEach(row=>
        {
          if(row.Status=='!On Leave')
          this.attendance.pop();
        });
        console.log(this.attendance);
    }

}
