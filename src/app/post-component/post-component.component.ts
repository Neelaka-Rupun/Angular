import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
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
      });

    }

    createPost(input: HTMLInputElement ) {
      const post = { title: input.value };
      input.value = ' ';

      this.service.createPost(post)
      .subscribe( response => {
        post[' id '] = response;
        this.posts.splice(0, 0, post);
      });
    }

    updatePost( post) {
      this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      });

    }

    deletePost(post) {
      post.id
      .subscribe( response => {
       const index = this.posts.indexOf(post);
       this.posts.splice(index, 1);
      });

    }
}
