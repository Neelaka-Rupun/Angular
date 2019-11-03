import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Native

})
export class FavoriteComponent  {

 @Input('is-Favorite') isSelected: boolean;
 @Output( 'change' ) Click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.Click.emit({ newValue: this.isSelected });
  }

}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
