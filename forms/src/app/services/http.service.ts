import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

    getDataService(){
       return this.http.get<any[]>(this.url);
    }

    createDataService(post:any){
    return  this.http.post(this.url, JSON.stringify(post))
    }

    deleteDataService(id :number){
     return  this.http.delete(this.url + '/' +id);
     }
//      deleteDataService(id: any): Observable<any> {
//          this.http.delete(this.url + '/' + id).pipe(
//            catchError((error: HttpErrorResponse) => {
//              if (error.status === 404) {
//                alert('This post is already deleted.');
//              } else {
//                alert('Error deleting the post.');
//              }
//              return throwError('Error occurred while deleting the post.');
//            })
//          );
//        }
// deleteDataService(id: any): Observable<any> {
//     return this.http.delete(this.url + '/' + id).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 404) {
//           alert('This post is already deleted.');
//         } else {
//           alert('Error deleting the post.');
//         }
//         return throwError('Error occurred while deleting the post.');
//       })
//     );
//   }

     updateDataService(id :any){
     return   this.http.patch(this.url + '/' +id, JSON.stringify({ title: 'Edited' }));
     }
}
