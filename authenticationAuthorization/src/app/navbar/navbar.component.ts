import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    console.log('Toggle function called');
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  
}
