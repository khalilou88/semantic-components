import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToc } from '@semantic-components/ui';

@Component({
  selector: 'app-toc-page',
  imports: [CommonModule, ScToc],
  template: `
    <div class="container mx-auto max-w-6xl px-4 py-8 flex gap-8">
      <!-- Insert the TOC component -->
      <sc-toc />

      <!-- Content sections -->
      <div class="flex-1">
        <section class="min-h-[70vh] mb-8 p-4 bg-white rounded-lg shadow-md" id="section1">
          <h2 class="text-xl font-bold mb-4">Getting Started</h2>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
            vestibulum vestibulum. Cras porttitor metus in metus ultrices, nec convallis odio
            pharetra.
          </p>
          <!-- More content -->
        </section>

        <section class="min-h-[70vh] mb-8 p-4 bg-white rounded-lg shadow-md" id="section2">
          <h2 class="text-xl font-bold mb-4">Installation</h2>
          <p class="mb-4">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <!-- More content -->
        </section>

        <section class="min-h-[70vh] mb-8 p-4 bg-white rounded-lg shadow-md" id="section3">
          <h2 class="text-xl font-bold mb-4">Configuration</h2>
          <p class="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <!-- More content -->
        </section>

        <section class="min-h-[70vh] mb-8 p-4 bg-white rounded-lg shadow-md" id="section4">
          <h2 class="text-xl font-bold mb-4">Advanced Usage</h2>
          <p class="mb-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
          <!-- More content -->
        </section>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TocPage {}
