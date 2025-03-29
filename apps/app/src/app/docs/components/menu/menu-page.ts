import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { MenuCheckboxesSection } from './menu-checkboxes-section';
import { MenuDemoSection } from './menu-demo-section';
import { MenuRadioGroupSection } from './menu-radio-group-section';

@Component({
  selector: 'app-menu-page',
  imports: [MenuDemoSection, MenuRadioGroupSection, MenuCheckboxesSection],
  template: `
    <app-menu-demo-section />

    <app-menu-checkboxes-section title="Checkboxes" />

    <app-menu-radio-group-section title="Radio Group" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MenuPage {}
