import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent {

  constructor(http: HttpClientModule) {

  }
}
