import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { RadioGroupForm } from './radio-group-form';

@Component({
  selector: 'app-radio-group-form-section',
  imports: [RadioGroupForm],
  template: `
    <app-radio-group-form />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupFormSection {}
