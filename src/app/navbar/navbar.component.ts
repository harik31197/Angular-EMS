import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  

 isAdmin = localStorage.getItem('empid');
 empid:any;
 value:string;
 name=localStorage.getItem('empname');
 
  
  @ViewChild(MatMenuTrigger, {static: true}) trigger: MatMenuTrigger;

  constructor(private router:Router,private httpService: HttpClient) { }

  ngOnInit() {
   
    this.empid = parseInt(this.isAdmin); 
    
    
  }

 
  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
