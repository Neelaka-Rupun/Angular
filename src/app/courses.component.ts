
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { CoursesService } from './courses.service';

@Component({
  selector : 'app-courses',
  template : `
  <h2>{{ title }}</h2>
<ul>
<li *ngFor="let course of courses">
{{course}}</li>
</ul>
` // data binding.
})

export class CoursesComponent {
  title = 'List of courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
