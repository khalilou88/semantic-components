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
    const v = this.value();
    const length = v.length;

    if (length < 2) {
      return new RegExp(/^[0-9]{1,1}$/g);
    }

    // if (length >= 1 && length < 2) {
    return new RegExp(/^[0-9]{1,2}\/$/g);
    // }

    // if (length >= 4 && length < 5) {
    //   return new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}$/g);
    // }

    //return new RegExp(/^[0-9]{1,2}$/g);

    //return new RegExp(/^[0-9]{1,2}\/{0,1}[0-9]{0,2}\/{0,1}[0-9]{0,4}$/g);
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

    console.log(this.value());

    if (!String(next).match(this.dateFormatRegExp())) {
      console.log('next f');
      console.log(this.dateFormatRegExp());
      event.preventDefault();
    } else {
      this.value.set(next);

      console.log(next.length);
    }
  }
}
