import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });
  catogories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Language'},
  ];

  submit(course) {
    console.log(course);
  }

  constructor() { }

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = ' ';
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }
  removeTopic(topic: FormControl) {
   const indexOfTopic =  this.topics.controls.indexOf(this.topics);
   this.topics.removeAt(indexOfTopic);
  }

}
