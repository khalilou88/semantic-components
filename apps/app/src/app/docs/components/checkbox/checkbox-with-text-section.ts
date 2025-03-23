import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CheckboxWithText } from './checkbox-with-text';

@Component({
  selector: 'app-checkbox-with-text-section',
  imports: [CheckboxWithText],
  template: `
    <app-checkbox-with-text />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxWithTextSection {}
