import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScLink } from '@semantic-components/ui';

@Component({
  selector: 'app-landing-page',
  imports: [ScLink, RouterLink],
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
          <a size="lg" variant="primary" sc-link routerLink="/docs/getting-started/introduction">
            Get Started
          </a>
          <a size="lg" variant="outline" sc-link routerLink="/docs/components/accordion">
            Browse Components
          </a>
        </div>
      </div>
    </section>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LandingPage {}
