import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }
  // tslint:disable-next-line: no-input-rename
  @Input ('appInputFormat') format;
  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;

    if(this.format === 'lowercase') {

      this.el.nativeElement.value = value.toLowerCase();

    }
    else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }

}
