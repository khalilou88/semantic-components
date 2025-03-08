import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { InlineAnimation, ModalExample, OverlayExample } from '@semantic-components/experimental';

@Component({
  selector: 'app-verification-page',
  imports: [OverlayExample, ModalExample, InlineAnimation],
  template: `
    <lib-animation-demo />

    <br />
    <br />
    <br />
    <br />

    <lib-modal-example />

    <br />
    <br />
    <br />
    <br />

    <lib-overlay-example />

    <br />
    <br />
    <br />
    <br />

    <lib-inline-animation />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerificationPage {}
