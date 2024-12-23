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

  private dateFormatRegExp = computed(() => {
    switch (this.value().length) {
      case 0: {
        return new RegExp(/^[0-9]{1,1}$/g);
      }
      case 1: {
        return new RegExp(/^[0-9]{1,2}\/{0,1}$/g);
      }
      case 2: {
        return new RegExp(/^[0-9]{1,2}\/[0-9]{0,1}$/g);
      }
      case 3: {
        return new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/{0,1}$/g);
      }
      case 4: {
        return new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/{0,1}[0-9]{0,1}$/g);
      }
      case 5: {
        return new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{0,2}$/g);
      }
      case 6: {
        return new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,3}$/g);
      }
      default: {
        return new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4,4}$/g);
      }
    }
  });

  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];

  constructor(private el: ElementRef) {}

  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    // Do not use event.keycode this is deprecated.
    // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    let current: string = this.el.nativeElement.value;

    // We need this because the current value on the DOM element
    // is not yet updated with the value from this event
    let next: string = current.concat(event.key);

    if (!String(next).match(this.dateFormatRegExp())) {
      event.preventDefault();
    } else {
      this.value.set(next);
    }
  }
}
