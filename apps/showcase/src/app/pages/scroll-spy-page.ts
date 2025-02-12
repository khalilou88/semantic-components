import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScScrollSpy } from '@semantic-components/ui';

@Component({
  selector: 'app-scroll-spy-page',
  imports: [ScScrollSpy],
  template: `
    <div class="m-10">
      <div class="relative min-h-screen">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center space-x-6">
          <a class="nav-link" [class.active]="activeSection === 'section1'" href="#section1">
            Section 1
          </a>
          <a class="nav-link" [class.active]="activeSection === 'section2'" href="#section2">
            Section 2
          </a>
          <a class="nav-link" [class.active]="activeSection === 'section3'" href="#section3">
            Section 3
          </a>
        </nav>

        <!-- Sections -->
        <div
          class="mt-16"
          [spySections]="['section1', 'section2', 'section3']"
          (sectionChange)="onSectionChange($event)"
          scScrollSpy
        >
          <section class="h-screen flex items-center justify-center bg-blue-200" id="section1">
            <h2 class="text-4xl font-bold">Section 1</h2>
          </section>
          <section class="h-screen flex items-center justify-center bg-green-200" id="section2">
            <h2 class="text-4xl font-bold">Section 2</h2>
          </section>
          <section class="h-screen flex items-center justify-center bg-red-200" id="section3">
            <h2 class="text-4xl font-bold">Section 3</h2>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: `
    @reference "tailwindcss";
    .nav-link {
      @apply text-gray-600 font-medium transition-colors duration-300;
    }

    .nav-link.active {
      @apply text-blue-600 font-bold border-b-2 border-blue-600;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollSpyPage {
  activeSection = '';

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }
}
