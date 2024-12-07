import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScBtnDanger,
  ScBtnGhost,
  ScBtnLink,
  ScBtnOutline,
  ScBtnPrimary,
  ScBtnSecondary,
} from '@semantic-components/ui';

@Component({
  selector: 'app-buttons-page',
  imports: [ScBtnPrimary, ScBtnSecondary, ScBtnDanger, ScBtnOutline, ScBtnGhost, ScBtnLink],
  template: `
    <button sc-btn-primary type="button">Primary</button>
    <button sc-btn-secondary type="button">Secondary</button>
    <button sc-btn-danger type="button">Danger</button>
    <button sc-btn-outline type="button">Outline</button>
    <button sc-btn-ghost type="button">Ghost</button>
    <button sc-btn-link type="button">Link</button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonsPage {}
