import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

 isAdmin = localStorage.getItem('empid');
  
  @ViewChild(MatMenuTrigger, {static: true}) trigger: MatMenuTrigger;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
