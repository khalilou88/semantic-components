import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-extensions-separator',
  imports: [],
  template: `
    <span class="inline-block h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
  `,
  styles: `
    :host {
      @apply px-1;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionsSeparator {}
