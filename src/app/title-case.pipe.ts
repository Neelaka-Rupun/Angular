import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
       return null;
      }
    const words = value.split(' ');
    for ( let i = 0; i < words.length; i++) {
       // tslint:disable-next-line: max-line-length
       words[i]  = (i > 0 && this.isPrepositions(words[i])) ?  words[i] = words[i].toLowerCase() : words[i] = words [i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
    }
    return words.join(' ');
  }

  private isPrepositions(words: string): boolean {
    const prepositions = [
      'of',
      'the'
    ];
    return prepositions.includes(words.toLowerCase());
  }


}


