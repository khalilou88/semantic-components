import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[scLabel]',
})
export class LabelDirective {
  constructor(public template: TemplateRef<any>) {}
}
