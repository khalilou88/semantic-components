import { Directive, ElementRef, booleanAttribute, computed, input, signal } from '@angular/core';

@Directive({
  selector: '[scDateInput]',
  host: {
    '(keydown)': 'onKeyDown($event)',
  },
})
export class ScDateInput {
  scDateInput = input<boolean, unknown>(false, { transform: booleanAttribute });

  value = signal('');

  private readonly dateFormatRegExp = computed(() => {
    switch (this.value().length) {
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
  });

  constructor(private readonly el: ElementRef) {}

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      this.value.update((v) => v.substring(0, v.length - 1));
      return;
    }

    // Do not use event.keycode this is deprecated.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    const current: string = this.el.nativeElement.value;

    // We need this because the current value on the DOM element
    // is not yet updated with the value from this event
    const next: string = current.concat(event.key);

    if (this.dateFormatRegExp().exec(next) === null) {
      event.preventDefault();
    } else {
      this.value.set(next);
    }
  }
}
