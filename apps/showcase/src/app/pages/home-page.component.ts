import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgBoldIcon } from '@semantic-components/heroicons/16/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, SvgBoldIcon],
  template: `
    <br />
    <br />

    <svg-bold-icon class="size-5" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
