import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTooltip } from '@semantic-components/ui';

@Component({
  selector: 'app-tooltip-page',
  imports: [ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      type="button"
      scTooltip="Toggle italic"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
        />
      </svg>
      <span class="sr-only">Italic</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipPageComponent {}
