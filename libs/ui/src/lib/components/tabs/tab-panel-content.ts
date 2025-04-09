import { Directive, TemplateRef, input } from '@angular/core';

@Directive({
  selector: '[scTabPanelContent]',
})
export class ScTabPanelContent {
  readonly tabId = input.required<string>({ alias: 'scTabPanelContent' });

  constructor(public templateRef: TemplateRef<any>) {}
}
