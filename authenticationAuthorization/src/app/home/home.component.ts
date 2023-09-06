import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentUser?: any ;
  constructor(private dataService: DataService, private router: Router) {}
  ngOnInit(): void {
    this.currentUser = this.dataService.getCurrentUser();
    // console.log(this.currentUser.name);
    // console.log(this.dataService.isLoggedIn());

  }
  logout() {
    this.dataService.logout();
    this.router.navigate(['/login']);
  }
  isLoggedIn:boolean = this.dataService.isLoggedIn();
}
