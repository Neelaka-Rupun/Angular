
import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector : 'app-courses',
  template : `
  <h2>{{ title }}</h2>
<ul>
<li *ngFor="let course of courses">
{{course}}</li>
</ul>
` //data binding.
})

export class CoursesComponent {
  title = 'List of courses';

  // getTitle() {
  //   return this.title;
  // }
  courses = ['course1', 'course2', 'course3'];
}
