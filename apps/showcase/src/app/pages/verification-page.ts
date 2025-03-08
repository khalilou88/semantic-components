import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  AnimationDemo,
  InlineAnimation,
  ModalExample,
  OverlayExample,
} from '@semantic-components/experimental';

@Component({
  selector: 'app-verification-page',
  imports: [OverlayExample, ModalExample, InlineAnimation, AnimationDemo],
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VerificationPage {}
