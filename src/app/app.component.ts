import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewMode = 'map';
  coursesTwo;
  courses = [1, 2];
  title: string;
  post = {
    title : 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body of a tweet',
    isLiked: false,
    likesCount: 10
  };

  onAdd() {
    this.coursesTwo.push({ id: 4, name: 'Course4 New added' });
  }

  onRemove(coursesTwo) {
    const index = this.coursesTwo.indexOf(coursesTwo);
    this.coursesTwo.splice(index, 1);
  }
  onFaviriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorte changed :', eventArgs);
  }

  onChange(coursesTwo) {
    coursesTwo.name = 'Updated';
  }

  loadCourses() {
    this.coursesTwo = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
    ];
  }
  trackCourse(index, coursesTwo) {
    return coursesTwo ? this.coursesTwo.id :  undefined;
  }

}
