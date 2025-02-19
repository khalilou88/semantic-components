import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScDualRangeSlider, ScRangeSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-range-slider-page',
  imports: [ScRangeSlider, ScDualRangeSlider],
  template: `
    <div class="m-10">
      <sc-dual-range-slider
        [(minValue)]="minVal"
        [(maxValue)]="maxVal"
        [min]="0"
        [max]="100"
        (minValueChange)="onMinValueChange($event)"
        (maxValueChange)="onMaxValueChange($event)"
      />

      <br />
      <br />
      <br />

      <input sc-range-slider type="range" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RangeSliderPage {
  minVal = 10;

  maxVal = 80;

  onMinValueChange(v: any) {
    console.log(v);
  }

  onMaxValueChange(v: any) {
    console.log(v);
  }
}
