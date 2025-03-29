import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InputWithLabel } from './input-with-label';

@Component({
  selector: 'app-input-with-label-section',
  imports: [InputWithLabel],
  template: `
    <app-input-with-label />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputWithLabelSection {}
