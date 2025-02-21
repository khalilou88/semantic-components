import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [ScAspectRatio],
  template: `
    <div class="m-10">
      <!-- Basic image example -->
      <div [ratio]="16 / 9" sc-aspect-ratio>
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b"
          alt="Your image"
        />
      </div>

      <br />

      <!-- Video example-->
      <!--div [ratio]="16 / 9" sc-aspect-ratio>
        <video class="w-full h-full object-cover" autoplay loop muted>
          <source src="your-video.mp4" type="video/mp4" />
        </video>
      </div-->

      <!-- With background image-->
      <div [ratio]="1" sc-aspect-ratio>
        <div
          class="w-full h-full bg-cover bg-center bg-no-repeat"
          style="background-image: url('https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b')"
        ></div>
      </div>

      <br />

      <!-- With content overlay-->
      <div [ratio]="16 / 9" sc-aspect-ratio>
        <div class="relative w-full h-full">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b"
            alt="Background"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/50">
            <h2 class="text-white text-2xl font-bold">Overlay Content</h2>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
