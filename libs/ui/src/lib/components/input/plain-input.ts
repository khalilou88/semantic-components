import { Directive, model } from '@angular/core';

@Directive({
  selector: 'input[sc-plain-input]',
})
export class ScPlainInput {
  readonly value = model<string>();
}
