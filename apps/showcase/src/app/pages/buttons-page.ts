import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-buttons-page',
  imports: [ScButton],
  template: `
    <button sc-button type="button">Primary</button>
    <button sc-button variant="secondary" type="button">Secondary</button>
    <button sc-button variant="destructive" type="button">Destructive</button>
    <button sc-button variant="outline" type="button">Outline</button>
    <button sc-button variant="ghost" type="button">Ghost</button>
    <button sc-button variant="link" type="button">Link</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonsPage {}
