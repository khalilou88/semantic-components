import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiGithubIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-footer',
  imports: [SiGithubIcon],
  template: `
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full">
        <div
          class="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700"
        >
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-300">
            © 2025
            <a href="">Semantic Components</a>
            . All Rights Reserved.
          </span>
          <div class="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
            <a
              class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              href="https://github.com/khalilou88/semantic-components"
            >
              <svg class="size-4" aria-hidden="true" si-github-icon></svg>
              <span class="sr-only">Github</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}
