import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScRangeSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-range-slider-page',
  imports: [ScRangeSlider],
  template: `
    <div class="m-10">
      <sc-range-slider
        [(value)]="sliderValue"
        [min]="0"
        [max]="100"
        [step]="1"
        [showMarks]="true"
        (valueChange)="onValueChange($event)"
        label="Volume"
        unit="%"
      />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RangeSliderPage {
  sliderValue = 0;

  onValueChange(v: any) {
    console.log(v);
  }
}
