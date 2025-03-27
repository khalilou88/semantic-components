import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-slider-demo',
  imports: [ScSlider, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="sliderForm">
      <input sc-slider formControlName="slider" />
    </form>

    <div class="mt-10">
      {{ sliderForm.value | json }}
    </div>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDemo {
  sliderForm = new FormGroup({
    slider: new FormControl(20),
  });
}
