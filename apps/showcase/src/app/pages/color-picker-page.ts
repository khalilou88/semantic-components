import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScColorPicker } from '@semantic-components/ui';

@Component({
  selector: 'app-color-picker-page',
  imports: [ScColorPicker],
  template: `
    <sc-color-picker [initialColor]="'#ff0000'" (colorChange)="onColorChange($event)" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ColorPickerPage {
  onColorChange(v: any) {
    console.log(v);
  }
}
