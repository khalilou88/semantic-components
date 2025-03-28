import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ComboboxDemoSection } from './combobox-demo-section';

@Component({
  selector: 'app-combobox-page',
  imports: [ComboboxDemoSection],
  template: `
    <app-combobox-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComboboxPage {}
