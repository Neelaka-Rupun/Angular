import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { observable, throwError  } from 'rxjs';
import { error } from 'protractor';
import { NotFoundError } from '../comman/not-found-error';
import { AppError } from '../comman/app-error';
import { BadInput } from '../comman/bad-input';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts2+2';
  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
    .pipe(
      catchError( (error: Response) => {
        if (error.status === 400 ) {
          return throwError(new BadInput(error.json()));
        } else {
          return throwError(new AppError(error.json()));
        }
      })
    );
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id).
    pipe(
      catchError(( error: Response) => {
        if (error.status === 404) {
          return throwError( new NotFoundError());
        } else {
          return throwError(new AppError(error));
        }
      })
    );
  }
}
