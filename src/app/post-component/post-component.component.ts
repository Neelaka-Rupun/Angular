import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent {
  posts: any[];
  constructor(http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      this.posts = response as any;
      console.log(this.posts[2].title);
      console.log(this.posts[2].userId);
      console.log(this.posts[2].id);
      console.log(this.posts[2].body);
    });
    }
}
