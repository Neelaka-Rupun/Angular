import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <div (click)=" onDiveClicked()">
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  <button (click)=" onSave($event) " class="btn btn-primary" [style.backgroundColor]= "isActive ? 'blue' : 'white'">Save</button>
  </div>
  `
})
export class CourseComponent {
  isActive = true ;
  email = 'neelaka@gamil.com';
  onDiveClicked(){
    console.log(' Div was clicked ');
  }

  onKeyUp(){
      console.log(this.email);
  }

  constructor() { }



}
