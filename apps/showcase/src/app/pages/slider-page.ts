import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-slider-page',
  imports: [ScSlider, ReactiveFormsModule, JsonPipe],
  template: `
    <div class="m-10">
      <div class="w-3/5">
        <form [formGroup]="sliderForm">
          <input sc-slider type="range" formControlName="range" />
        </form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {{ sliderForm.value | json }}

      <br />
      <br />
      <br />
      <br />
      <br />

      <span
        class="relative flex w-3/5 touch-none select-none items-center"
        dir="ltr"
        data-orientation="horizontal"
        aria-disabled="false"
        style="--radix-slider-thumb-transform: translateX(-50%);"
      >
        <span
          class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
          data-orientation="horizontal"
        >
          <span
            class="absolute h-full bg-primary"
            data-orientation="horizontal"
            style="left: 0%; right: 66%;"
          ></span>
        </span>
        <span
          style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(34% + 3.2px);"
        >
          <span
            class="block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            role="slider"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-orientation="horizontal"
            data-orientation="horizontal"
            tabindex="0"
            data-radix-collection-item=""
            aria-valuenow="34"
            style=""
          ></span>
        </span>
      </span>
    </div>
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
