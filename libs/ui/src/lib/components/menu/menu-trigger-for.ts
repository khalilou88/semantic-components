import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive, input } from '@angular/core';

@Directive({
  selector: '[scMenuTriggerFor]',
  host: {
    '[attr.aria-haspopup]': 'true',
  },
  hostDirectives: [
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: scMenuTriggerFor'],
    },
  ],
})
export class ScMenuTriggerFor {
  readonly scMenuTriggerFor = input.required();
}
