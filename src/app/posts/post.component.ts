import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {
      http.get(this.url)
      .subscribe(response => {
        console.log(response);
        this.posts = response as any;
      });

    }

    createPost(input: HTMLInputElement) {
      let post = {title: input.value};
      input.value = '';
      this.http.post(this.url, JSON.stringify(post))
      .subscribe(responce => {
        post['id'] = responce;
        this.posts.splice(0, 0, post);
        console.log(responce);
      });
    }
    updatePost(post) {
      this.http.patch(this.url + '/' + post.id, JSON.stringify(post)).
      subscribe(responce => {
        console.log(responce);
      });
    }

    deletePost(post) {
      this.http.delete(this.url + '/' + post.id).
      subscribe(responce =>{
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

      });
    }


}
