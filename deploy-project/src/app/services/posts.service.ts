import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  constructor(private http: HttpClient) {}
  private url = 'https://jsonplaceholder.typicode.com/posts';
  getPosts() {
    return this.http.get<string[]>(this.url);
  }
  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  updatePosts(post: any) {
    const updatedData = { title: 'updated' };
    return this.http.patch(this.url + '/' + post.id, updatedData);
  }
  deletePosts(post: any) {
    return this.http.delete(this.url + '/' + post.id).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong while deleting the post.');
      })
    ); 
  }
}
