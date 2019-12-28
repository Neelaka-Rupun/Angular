warning: LF will be replaced by CRLF in src/app/posts/post.component.ts.
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in src/app/services/post.service.ts.
The file will have its original line endings in your working directory
[1mdiff --git a/src/app/comman/app-error-handler.ts b/src/app/comman/app-error-handler.ts[m
[1mindex 4d9c2b3..634c9d0 100644[m
[1m--- a/src/app/comman/app-error-handler.ts[m
[1m+++ b/src/app/comman/app-error-handler.ts[m
[36m@@ -3,7 +3,7 @@[m [mimport { ErrorHandler } from '@angular/core';[m
 export class AppErrorHandler implements ErrorHandler {[m
     handleError(error) {[m
       alert('An unexpected error occurred.');[m
[31m-      console.log(error);[m
[32m+[m[32m      console.error(error);[m
     }[m
 }[m
 [m
[1mdiff --git a/src/app/posts/post.component.ts b/src/app/posts/post.component.ts[m
[1mindex 1876788..cf7abc9 100644[m
[1m--- a/src/app/posts/post.component.ts[m
[1m+++ b/src/app/posts/post.component.ts[m
[36m@@ -17,25 +17,27 @@[m [mexport class PostComponent implements OnInit {[m
     constructor(private service: PostService) {}[m
 [m
     ngOnInit() {[m
[31m-      this.service.getPost()[m
[32m+[m[32m      this.service.getAll()[m
       .subscribe([m
[31m-        response => {[m
[31m-        console.log(response);[m
[31m-        this.posts = response as any;[m
[32m+[m[32m        dataOfPost => {[m
[32m+[m[32m        console.log(dataOfPost);[m
[32m+[m[32m        this.posts = dataOfPost as any;[m
       });[m
     }[m
 [m
     createPost(input: HTMLInputElement) {[m
       const post = {title: input.value};[m
[32m+[m[32m      this.posts.splice(0, 0, post);[m
       input.value = '';[m
[31m-      this.service.createPost(post)[m
[32m+[m
[32m+[m[32m      this.service.create(post)[m
       .subscribe([m
[31m-        response => {[m
[31m-        post['id'] = response;[m
[31m-        this.posts.splice(0, 0, post);[m
[31m-        console.log(response);[m
[32m+[m[32m        newPost => {[m
[32m+[m[32m        post['id'] = newPost;[m
[32m+[m[32m        console.log(newPost);[m
       },[m
         (error: AppError) => {[m
[32m+[m[32m          this.posts.splice(0, 1);[m
           if ( error instanceof BadInput) {[m
             // this.form.setErrors(error.originalError);[m
           } else {[m
[36m@@ -45,31 +47,24 @@[m [mexport class PostComponent implements OnInit {[m
     }[m
 [m
     updatePost(post) {[m
[31m-      this.service.updatePost(post.id)[m
[32m+[m[32m      this.service.update(post.id)[m
       .subscribe([m
[31m-        response => {[m
[31m-        console.log(response);[m
[32m+[m[32m        updatePost => {[m
[32m+[m[32m        console.log(updatePost);[m
       });[m
     }[m
 [m
     deletePost(post) {[m
[31m-      let reslog ;[m
[31m-      this.service.deletePost(345)[m
[31m-      .subscribe([m
[31m-       // tslint:disable-next-line: ban-types[m
[31m-       ( response: Object ) => {[m
[31m-        const index = this.posts.indexOf(222);[m
[31m-        this.posts.splice(index, 1);[m
[31m-        console.log(response);[m
[31m-        if (Object.keys(response).length === 0) {[m
[31m-        console.log('response works');[m
[32m+[m[32m      const index = this.posts.indexOf(post);[m
[32m+[m[32m      this.posts.splice(index, 1);[m
 [m
[31m-      }[m
[31m-      },[m
[32m+[m[32m      this.service.delete(post.id)[m
[32m+[m[32m      .subscribe ([m
[32m+[m[32m       // tslint:disable-next-line: ban-types[m
[32m+[m[32m        null,[m
       (error: AppError) => {[m
[31m-        console.log(reslog + "123");[m
[31m-        if ((error instanceof NotFoundError) && (Object.keys(reslog).length === 0)) {[m
[31m-          console.log('Error log');[m
[32m+[m[32m        this.posts.splice(index, 0, post);[m
[32m+[m[32m        if (error instanceof NotFoundError) {[m
           alert('post has been already deleted');[m
         } else {[m
           throw error;[m
[1mdiff --git a/src/app/services/post.service.ts b/src/app/services/post.service.ts[m
[1mindex 8d0bcad..88fb8b7 100644[m
[1m--- a/src/app/services/post.service.ts[m
[1m+++ b/src/app/services/post.service.ts[m
[36m@@ -1,51 +1,12 @@[m
 import { Injectable } from '@angular/core';[m
[31m-import { HttpClient, HttpErrorResponse } from '@angular/common/http';[m
[31m-import { catchError, map, tap } from 'rxjs/operators';[m
[31m-import { observable, throwError  } from 'rxjs';[m
[31m-import { error } from 'protractor';[m
[31m-import { NotFoundError } from '../comman/not-found-error';[m
[31m-import { AppError } from '../comman/app-error';[m
[31m-import { BadInput } from '../comman/bad-input';[m
[31m-[m
[32m+[m[32mimport { HttpClient } from '@angular/common/http';[m
[32m+[m[32mimport { DataService } from './data.service';[m
 [m
 @Injectable({[m
   providedIn: 'root'[m
 })[m
[31m-export class PostService {[m
[31m-  private url = 'http://jsonplaceholder.typicode.com/posts2+2';[m
[31m-  constructor(private http: HttpClient) { }[m
[31m-[m
[31m-  getPost() {[m
[31m-    return this.http.get(this.url);[m
[31m-  }[m
[31m-[m
[31m-  createPost(post) {[m
[31m-    return this.http.post(this.url, JSON.stringify(post))[m
[31m-    .pipe([m
[31m-      catchError( (error: Response) => {[m
[31m-        if (error.status === 400 ) {[m
[31m-          return throwError(new BadInput(error.json()));[m
[31m-        } else {[m
[31m-          return throwError(new AppError(error.json()));[m
[31m-        }[m
[31m-      })[m
[31m-    );[m
[31m-  }[m
[31m-[m
[31m-  updatePost(post) {[m
[31m-    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));[m
[31m-  }[m
[31m-[m
[31m-  deletePost(id) {[m
[31m-    return this.http.delete(this.url + '/' + id).[m
[31m-    pipe([m
[31m-      catchError(( error: Response) => {[m
[31m-        if (error.status === 404) {[m
[31m-          return throwError( new NotFoundError());[m
[31m-        } else {[m
[31m-          return throwError(new AppError(error));[m
[31m-        }[m
[31m-      })[m
[31m-    );[m
[32m+[m[32mexport class PostService extends DataService {[m
[32m+[m[32m  constructor( http: HttpClient) {[m
[32m+[m[32m    super('http://jsonplaceholder.typicode.com/posts', http);[m
   }[m
 }[m
