import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ModalExample, OverlayExample } from '@semantic-components/experimental';

@Component({
  selector: 'app-verification-page',
  imports: [OverlayExample, ModalExample],
  template: `
    <lib-modal-example />

    <br />
    <br />

    <lib-overlay-example />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerificationPage {}
