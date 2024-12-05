import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-extensions-separator',
  imports: [],
  template: `
    <div class="px-1">
      <span class="block h-4 w-px bg-gray-300 dark:bg-gray-600"></span>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionsSeparator {}
