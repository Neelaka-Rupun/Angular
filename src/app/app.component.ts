import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  post = {
    title : 'Title',
    isFavorite: true
  };
  onFaviriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorte changed :', eventArgs);
  }
}
