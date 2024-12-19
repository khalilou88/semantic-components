import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive, input } from '@angular/core';

@Directive({
  selector: '[scMenuTriggerFor]',
  hostDirectives: [
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: scMenuTriggerFor'],
    },
  ],
})
export class ScMenuTriggerFor {
  scMenuTriggerFor = input.required();
}
