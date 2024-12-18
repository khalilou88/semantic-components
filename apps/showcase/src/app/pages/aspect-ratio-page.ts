import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [ScAspectRatio],
  template: `
    <div class="preview flex min-h-[350px] w-full items-center justify-center p-10">
      <sc-aspect-ratio
        wrapperClass="bg-muted"
        ratio="16 / 9"
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
      />
    </div>

    <div class="preview flex min-h-[350px] w-full items-center justify-center p-10">
      <div
        data-radix-aspect-ratio-wrapper=""
        style="position: relative; width: 100%; padding-bottom: 56.25%;"
      >
        <div class="bg-muted" style="position: absolute; inset: 0px;">
          <img
            class="size-full rounded-md object-cover"
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
