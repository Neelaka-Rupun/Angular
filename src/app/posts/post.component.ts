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
      this.service.getAll()
      .subscribe(
        dataOfPost => {
        console.log(dataOfPost);
        this.posts = dataOfPost as any;
      });
    }

    createPost(input: HTMLInputElement) {
      const post = {title: input.value};
      this.posts.splice(0, 0, post);
      input.value = '';

      this.service.create(post)
      .subscribe(
        newPost => {
        post['id'] = newPost;
        console.log(newPost);
      },
        (error: AppError) => {
          this.posts.splice(0, 1);
          if ( error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          } else {
           throw error;
          }
      });
    }

    updatePost(post) {
      this.service.update(post.id)
      .subscribe(
        updatePost => {
        console.log(updatePost);
      });
    }

    deletePost(post) {
      this.service.delete(post.id);
    }
}
