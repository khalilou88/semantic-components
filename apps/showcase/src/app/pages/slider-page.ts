import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-slider-page',
  imports: [ScSlider],
  template: `
    <input sc-slider type="range" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderPage {}
