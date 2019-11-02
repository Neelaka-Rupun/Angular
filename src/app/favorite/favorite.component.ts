import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 @Input('is-Favorite') isSelected: boolean;
 @Output( 'change' ) Click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.Click.emit({ newValue: this.isSelected });
  }

}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
