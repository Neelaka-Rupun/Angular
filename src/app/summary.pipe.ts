import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'summary'
})

export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    const actualLimit = (limit) ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
