import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin?: boolean;
  myData: any;
  constructor(private dataService: DataService, private router: Router) {
    // get data
    dataService.getData().subscribe((x) => (this.myData = x));
  }

  signIn(value: any) {
    this.dataService.login(value).subscribe((result) => {
      console.log(result);
      if (result) {
        console.log('Login successful');
        this.router.navigate(['/']);
      } else {
        console.log('Login failed');
        this.invalidLogin = true;
      }
    });
  }
}
