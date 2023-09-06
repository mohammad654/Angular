import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-httpservices',
  templateUrl: './httpservices.component.html',
  styleUrls: ['./httpservices.component.css'],
})
export class HttpservicesComponent implements OnInit {
  posts: any[] = [];
  spinnerVisible = false;
  constructor(private services: PostsService) {}

  ngOnInit(): void {
 
    this.services.getPosts();
    this.showPosts();
  }
  isShowPosts = true;
  showPosts() {
    if (this.isShowPosts) {
      this.services.getPosts().subscribe(
        (response) => {
          this.posts = response;
              this.spinnerVisible = true;
              setTimeout(() => {
                this.spinnerVisible = false;
              }, 1000);
        },
        (error) => {
          console.log('an unexpected error occurred');
        }
      );
      this.isShowPosts = false;
    } else {
      this.isShowPosts = true;
      this.posts = [];
    }
  }

  createPost(input: HTMLInputElement) {
    console.log(input.value);
    const post: any = { title: input.value };

    this.services.createPost(input).subscribe(
      (response: any) => {
        post.id = response.id;
        console.log(response);
        this.posts?.splice(0, 0, post);
        input.value = '';
      },
      (error: Response) => {
        if (error.status === 400) {
          // this.form.setErrot
          console.log('this post has been already deleted');
        } else {
          console.log('create an unexpected error occurred');
          console.log(error);
        }
      }
    );
  }
  updatePosts(post: any) {
    this.services.updatePosts(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error: Response) => {
        if (error.status === 400) {
          console.log('this post has been already deleted');
        } else {
          console.log('update an unexpected error occurred');
          console.log(error);
        }
      }
    );
  }
  deletePosts(post: any) {
    this.services.deletePosts(post).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
      },
      (error: Response) => {
        if (error.status === 404) {
          console.log('this post has been already deleted');
        } else {
          console.log('delete error occurred');
          console.log(error);
        }
      }
    );
  }
}
