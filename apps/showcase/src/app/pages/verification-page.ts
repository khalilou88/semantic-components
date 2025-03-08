import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  AnimatedList,
  InlineAnimation,
  ModalExample,
  OverlayExample,
} from '@semantic-components/experimental';

@Component({
  selector: 'app-verification-page',
  imports: [OverlayExample, ModalExample, InlineAnimation, AnimatedList],
  template: `
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

    <br />
    <br />
    <br />
    <br />

    <lib-animated-list />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerificationPage {}
