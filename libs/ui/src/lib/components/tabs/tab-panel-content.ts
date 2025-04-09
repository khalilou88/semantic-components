import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[scTabPanelContent]',
})
export class ScTabPanelContent {
  @Input('scTabPanelContent') tabId!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
