import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts: any[];


  constructor( private service: PostService) {

    }

    ngOnInit() {
      this.service.getPosts()
      .subscribe(response => {
        this.posts = response as any;
        console.log(this.posts[2].title);
        console.log(this.posts[2].userId);
        console.log(this.posts[2].id);
        console.log(this.posts[2].body);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });

    }

    createPost(input: HTMLInputElement ) {
      const post = { title: input.value };
      input.value = ' ';

      this.service.createPost(post)
      .subscribe( response => {
        if( error.status === 400 ){
          this.form.setErrors(errpr.json())
        }
        post[' id '] = response;
        this.posts.splice(0, 0, post);
      },
       (error: Response) => {
        alert('An unexpected error occurred.');
        console.log(error);
       });
    }

    updatePost( post) {
      this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });

    }

    // deletePost(post) {
    //   this.service.deletePost(345)
    //   .subscribe( response => {
    //    const index = this.posts.indexOf(post);
    //    this.posts.splice(index, 1);
    //   }, (error: Response) => {
    //     if ( error.status === 404) {
    //       alert('This post has already been deleted')
    //     } else {
    //       alert('An unexpected error occurred.');
    //       console.log(error);
    //     }
    //   });

    // }
    deletePost(post) {
      this.service.deletePost(post.id)
        .subscribe((response: Object) => {
          let index = this.posts.indexOf(post);
          if (!response.hasOwnProperty(post)) {
            alert('Post does not exist')
            console.error(response);
          }
        },
        (error) => {
          alert('Unexpected error occured.');
          console.log(error)
        })
    }
}
