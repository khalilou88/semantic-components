import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[scDateInput]',
  host: {
    '(keydown)': 'onKeyDown($event)',
  },
})
export class ScDateInput {
  private readonly el = inject(ElementRef);

  private readonly dateFormatRegExp = (current: string) => {
    switch (current.length) {
      case 0: {
        return new RegExp(/^\d$/g);
      }
      case 1: {
        return new RegExp(/^\d{1,2}\/?$/g);
      }
      case 2: {
        return new RegExp(/^\d{1,2}\/\d?$/g);
      }
      case 3: {
        return new RegExp(/^\d{1,2}\/\d{1,2}\/?$/g);
      }
      case 4: {
        return new RegExp(/^\d{1,2}\/\d{1,2}\/?\d?$/g);
      }
      case 5: {
        return new RegExp(/^\d{1,2}\/\d{1,2}\/\d{0,2}$/g);
      }
      case 6: {
        return new RegExp(/^\d{1,2}\/\d{1,2}\/\d{0,3}$/g);
      }
      default: {
        return new RegExp(/^\d{1,2}\/\d{1,2}\/\d{1,4}$/g);
      }
    }
  };

  previousKey = '';

  onKeyDown(event: KeyboardEvent) {
    console.log(event);

    if (event.key === 'Backspace' || (this.previousKey === 'Control' && event.key === 'c')) {
      this.previousKey = event.key;
      return;
    }

    this.previousKey = event.key;

    const current: string = this.el.nativeElement.value;

    const v = this.el.nativeElement.selectionStart;

    const next = current.slice(0, v) + event.key + current.slice(v);

    if (this.dateFormatRegExp(current).exec(next) === null) {
      event.preventDefault();
    }
  }
}
