import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-radix-ui',
  imports: [ScAspectRatio],
  template: `
    <sc-aspect-ratio [ratio]="16 / 9">
      <img
        class="size-full object-cover"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
    </sc-aspect-ratio>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioRadixUi {}
