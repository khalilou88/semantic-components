import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-slider-page',
  imports: [ScSlider, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="sliderForm">
      <input sc-slider type="range" formControlName="range" />
    </form>

    <br />
    <br />
    <br />
    <br />
    <br />

    {{ sliderForm.value | json }}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SliderPage {
  sliderForm = new FormGroup({
    range: new FormControl(20),
  });
}
