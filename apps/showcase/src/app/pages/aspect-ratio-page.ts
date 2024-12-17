import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [ScAspectRatio],
  template: `
    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <sc-aspect-ratio class="bg-muted" ratio="16 / 9">
        <img
          class="h-full w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          fill
        />
      </sc-aspect-ratio>
    </div>

    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <div
        data-radix-aspect-ratio-wrapper=""
        style="position: relative; width: 100%; padding-bottom: 56.25%;"
      >
        <div class="bg-muted" style="position: absolute; inset: 0px;">
          <img
            class="h-full w-full rounded-md object-cover"
            alt="Photo by Drew Beamer"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
          />
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
