import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommentStmt } from '@angular/compiler';
import { AppError } from '../comman/app-error';
import { NotFoundError } from '../comman/not-found-error';
import { BadInput } from '../comman/bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];


    constructor(private service: PostService) {}

    ngOnInit() {
      this.service.getPost()
      .subscribe(
        response => {
        console.log(response);
        this.posts = response as any;
      });
    }

    createPost(input: HTMLInputElement) {
      const post = {title: input.value};
      input.value = '';
      this.service.createPost(post)
      .subscribe(
        response => {
        post['id'] = response;
        this.posts.splice(0, 0, post);
        console.log(response);
      },
        (error: AppError) => {
          if ( error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
           throw error;
          }
      });
    }

    updatePost(post) {
      this.service.updatePost(post.id)
      .subscribe(
        response => {
        console.log(response);
      });
    }

    deletePost(post) {
      let reslog ;
      this.service.deletePost(345)
      .subscribe(
       // tslint:disable-next-line: ban-types
       ( response: Object ) => {
        const index = this.posts.indexOf(222);
        this.posts.splice(index, 1);
        console.log(response);
        if (Object.keys(response).length === 0) {
        console.log('response works');

      }
      },
      (error: AppError) => {
        console.log(reslog + "123");
        if ((error instanceof NotFoundError) && (Object.keys(reslog).length === 0)) {
          console.log('Error log');
          alert('post has been already deleted');
        } else {
          throw error;

        }
      });
    }
}
