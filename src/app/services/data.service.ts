import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { observable, throwError  } from 'rxjs';
import { NotFoundError } from '../comman/not-found-error';
import { AppError } from '../comman/app-error';
import { BadInput } from '../comman/bad-input';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe( map(response => response) ,
     catchError(this.handleError)
    );
  }

  create(resource) {
    return throwError(new AppError());
    // return this.http.post(this.url, JSON.stringify(resource))
    // .pipe( map(response => response),
    //   catchError(this.handleError)
    // );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify(resource))
    .pipe( map(response => response),
      catchError(this.handleError)
    );
  }

  delete(id) {
    return throwError(new AppError());
    // return this.http.delete(this.url + '/' + id).
    // pipe( map(response => response),
    //   catchError(this.handleError)
    // );
  }

  private handleError(error: Response) {
    if (error.status === 400 ) {
          return throwError(new BadInput(error.json()));
        }

    if (error.status === 404) {
      return throwError( new NotFoundError());
    } else {
      return throwError(new AppError(error));
    }
  }
}
