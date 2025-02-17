import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [ScAspectRatio],
  template: `
    <div class="m-10">
      <!-- Basic usage with video aspect ratio (16:9) -->
      <div class="" sc-aspect-ratio>
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
          alt=""
        />
      </div>

      <!-- Square aspect ratio (1:1) -->
      <div sc-aspect-ratio ratio="square">
        <div class="w-full h-full bg-gray-200 flex items-center justify-center">Square content</div>
      </div>

      <!-- Portrait aspect ratio (3:4) with custom classes -->
      <div class="max-w-md mx-auto" sc-aspect-ratio ratio="portrait">
        <video class="w-full h-full object-cover">
          <source src="your-video.mp4" type="video/mp4" />
        </video>
      </div>

      <!-- Widescreen aspect ratio (21:9) -->
      <div sc-aspect-ratio ratio="widescreen">
        <iframe class="w-full h-full" src="your-embed-url" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
