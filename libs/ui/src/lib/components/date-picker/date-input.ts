import { Directive, ElementRef, booleanAttribute, input } from '@angular/core';

@Directive({
  selector: '[scDateInput]',
  host: {
    '(keydown)': 'onKeyDown($event)',
  },
})
export class ScDateInput {
  scDateInput = input<boolean, unknown>(false, { transform: booleanAttribute });

  //private regex: RegExp = new RegExp(/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/g);

  // Allow decimal numbers. The \. is only allowed once to occur
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);

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
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
