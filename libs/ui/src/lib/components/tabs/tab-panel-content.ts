import { Directive, TemplateRef, inject, input } from '@angular/core';

@Directive({
  selector: '[scTabPanelContent]',
})
export class ScTabPanelContent {
  readonly templateRef = inject<TemplateRef<any>>(TemplateRef);

  readonly tabId = input.required<string>({ alias: 'scTabPanelContent' });
}
