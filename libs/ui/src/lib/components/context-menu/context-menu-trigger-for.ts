import { CdkContextMenuTrigger } from '@angular/cdk/menu';
import { Directive, TemplateRef, input } from '@angular/core';

@Directive({
  selector: '[scContextMenuTriggerFor]',
  hostDirectives: [
    {
      directive: CdkContextMenuTrigger,
      inputs: ['cdkContextMenuTriggerFor: scContextMenuTriggerFor'],
    },
  ],
})
export class ScContextMenuTriggerFor {
  readonly scContextMenuTriggerFor = input.required<TemplateRef<unknown>>();

  constructor() {
    console.log('yes');
  }
}
