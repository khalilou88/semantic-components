import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { AnimationDemo } from '@semantic-components/experimental';

@Component({
  selector: 'app-animation-page',
  imports: [AnimationDemo],
  template: `
    <div class="m-10 h-100">
      <lib-animation-demo />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnimationPage {}
