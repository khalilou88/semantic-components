import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgBeakerIcon } from '@semantic-components/heroicons/24/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SvgBeakerIcon],
  template: `
    <svg-beaker-icon class="size-6 text-blue-500" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
