import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-demo',
  imports: [ScAspectRatio, NgOptimizedImage],
  template: `
    <sc-aspect-ratio class="bg-muted" [ratio]="16 / 9">
      <img
        class="h-full w-full rounded-md object-cover"
        ngSrc="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        priority
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
export class AspectRatioDemo {}
