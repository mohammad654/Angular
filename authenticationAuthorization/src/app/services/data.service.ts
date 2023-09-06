import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
  login(credentials: any): Observable<boolean> {
    return this.http.get<any[]>(this.dataUrl).pipe(
      map((users: any) => {
        const user = users.find(
          (u: any) =>
            u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user)); // Save user in localStorage
        }
        return !!user;
      })
    );
  }

  getCurrentUser(): any {
    const userJSON = localStorage.getItem('currentUser');
    if (userJSON) {
      return JSON.parse(userJSON);
    }
    return null;
  }

 

  logout() { localStorage.removeItem('currentUser');}

  isLoggedIn() {
      const userJSON = localStorage.getItem('currentUser');
      if (userJSON) 
      return true;

    return false;
  }
}
