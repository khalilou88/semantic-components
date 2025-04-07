import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[scTabContent]',
})
export class ScTabContent {
  @Input('scTabContent') tabId!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
