import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

    private isPreposition( word : string ):boolean {
      let prepositions = [
        'of',
        'the'
      ];
    }
  }
}


