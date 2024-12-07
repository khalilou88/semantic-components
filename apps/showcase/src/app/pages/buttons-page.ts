import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScBtnDanger, ScBtnGhost, ScBtnPrimary, ScBtnSecondary } from '@semantic-components/ui';

@Component({
  selector: 'app-buttons-page',
  imports: [ScBtnPrimary, ScBtnSecondary, ScBtnDanger, ScBtnGhost],
  template: `
    <button sc-btn-primary type="button">Primary</button>
    <button sc-btn-secondary type="button">Secondary</button>
    <button class="btn btn-success" type="button">Success</button>
    <button sc-btn-danger type="button">Danger</button>
    <button class="btn btn-warning" type="button">Warning</button>
    <button class="btn btn-info" type="button">Info</button>
    <button sc-btn-ghost type="button">Ghost</button>
    <button class="btn btn-dark" type="button">Dark</button>

    <button class="btn btn-link" type="button">Link</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonsPage {}
