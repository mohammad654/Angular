import { Component  } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent   {
   constructor(private router : Router) {}
isNavbarOpen = false;

toggleNavbar() {
  console.log('Toggle function called');
  this.isNavbarOpen = !this.isNavbarOpen;
}

// navBackgroundColor=environment.navBarBackgroundColor;
}
