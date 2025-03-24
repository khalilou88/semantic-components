import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { SliderDemo } from './slider-demo';

@Component({
  selector: 'app-slider-demo-section',
  imports: [SliderDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-slider-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-slider-demo',
  imports: [ScSlider, ReactiveFormsModule, JsonPipe],
  template: \`
    <form [formGroup]="sliderForm">
      <input sc-slider formControlName="slider" />
    </form>

    <div class="mt-10">
      {{ sliderForm.value | json }}
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDemo {
  sliderForm = new FormGroup({
    slider: new FormControl(20),
  });
}`;
}
