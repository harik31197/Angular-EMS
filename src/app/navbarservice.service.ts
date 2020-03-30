import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarserviceService {
  navVisible:boolean;

  constructor() { 
    this.navVisible = true;
  }

  hideNav() { this.navVisible = false;
  }

showNav() { this.navVisible = true;
   }

   toggleNav() { this.navVisible = !this.navVisible; }
}
