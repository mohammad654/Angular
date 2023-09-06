import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private service: HttpService  ,private route: ActivatedRoute) {}

  posts?: any;

  id: string | null = null;
  postTitle: string | null = null;
  page: string | null = null;
// param get getAll has key
//+id to convert string to number
ngOnInit(): void {
//

//    this.route.snapshot.paramMap.get('id');
//   this.id = Number(this.id) - 1;
// this.route.paramMap.subscribe(param=>{this.id=param.get('id');});


this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.postTitle = param.get('title');
    });

  this.page=this.route.snapshot.queryParamMap.get('page');

// get
 this.service.getDataService().subscribe(
                          data => {this.posts = data;},
                         (error) => {console.log('Error fetching posts:', error);}
                              );

  }
  //       create
    createPost(input: HTMLInputElement) {
      const post: any = { title: input.value };
      this.service.createDataService(post).subscribe(
        (response: any) => {
          post.id = response.id;
          this.posts?.splice(0, 0, post);
          input.value = '';
        },
        (error) => {  //error.status==400
          console.log('Error creating post:', error);
        }
      );
    }
  // update
    editePost(post: any) {
     this.service.updateDataService(post.id).subscribe(response => {
        console.log(post);
      });
    }

  //   delete
//     deletePost(post :any) {
//        this.service.deleteDataService(post.id).subscribe(response => {
//             if (post.id <= this.posts?.length) {
//                 let index = this.posts?.indexOf(post);
//                         console.log(index)
//                         if (index !== undefined && index !== -1) {
//                           this.posts?.splice(index, 1);
//                         }
//             }
//           },(error:Response) => {
//                 if(error.status==404)
//                     alert("this post is already deleted");
//                 else
//                    alert("Unexpected Error")
//
//              });
//
//         }
// }



deletePost(post: any) {
let id=post.id;
// id=199999;
    if (id >= 0 && id < this.posts?.length) {
        this.service.deleteDataService(id).subscribe(
            () => {
                const index = this.posts.indexOf(post);
                console.log(index);
                if (index !== -1)
                    this.posts.splice(index, 1);
            },
            (error: Response) => {
                if (error.status === 404)
                    alert("This post is already deleted");
                 else
                    alert("Unexpected Error");
            }
        );
    } else
        alert("Invalid post ID");
}


}


// deletePost(post: any) {
//     this.service.deleteDataService(post.id).subscribe(
//         () => {
//             const index = this.posts?.findIndex((p: any) => p.id == post.id);
//             console.log(index);
//             if (index !== undefined && index !== -1) {
//                 this.posts?.splice(index, 1);
//             } else {
//                 alert("Post not found in the array.");
//             }
//         },
//         (error: any) => {
//             if (error.status === 404) {
//                 alert("This post is already deleted");
//             } else {
//                 alert("Unexpected Error");
//             }
//         }
//     );
// }
// }

/*

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  posts?: any[];
  constructor(private service: HttpService) {}
  ngOnInit(): void {
// get
    this.service.getPosts().
    subscribe(
                data => {this.posts = data;},
                (error) => {console.log('Error fetching posts:', error);}
    );
// create

  createPost(input: HTMLInputElement) {
 const post: any = { title: input.value };
  this.service.createPost(post).subscribe(
    (response: any) => {
      post.id = response.id;
      this.posts?.splice(0, 0, post);
      input.value = '';
      console.log(response);
    },
    (error) => {
      console.log('Error creating post:', error);
    }
  );
}






  }
}


//   editePost(post: any) {
//     this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: 'Edited' })).subscribe(response => {
//       console.log(post);
//     });
//   }
//
//   deletePost(post: any) {
//     this.http.delete(this.url + '/' + post.id).subscribe(response => {
//       let index = this.posts?.indexOf(post);
//       if (index !== undefined && index !== -1) {
//         this.posts?.splice(index, 1);
//       }
//     });
//   }
*/
