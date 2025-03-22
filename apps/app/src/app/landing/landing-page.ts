import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-landing-page',
  imports: [ScButton],
  template: `
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Build beautiful apps in record time</h1>
        <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          A premium UI kit built with Angular and Tailwind CSS that helps you create stunning
          interfaces quickly and efficiently.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button [size]="'lg'" sc-button>Get Started</button>
          <button [size]="'lg'" [variant]="'outline'" sc-button>View Documentation</button>
        </div>
      </div>
    </section>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LandingPage {}
