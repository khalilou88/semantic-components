import { Directive, ElementRef, inject, model } from '@angular/core';

@Directive({
  selector: 'input[sc-plain-input]',
  host: {
    '[value]': 'value()',
    '(input)': 'handleInput()',
  },
})
export class ScPlainInput {
  private readonly hostRef = inject(ElementRef);

  readonly value = model<string>();

  handleInput() {
    const newValue = this.hostRef.nativeElement.value;
    this.value.set(newValue);
  }
}
