import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScEditor } from '../editor';

@Component({
  selector: 'sc-extension-paragraph',
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem],
  template: `
    <button
      class="flex items-center justify-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:ring-gray-600"
      [cdkMenuTriggerFor]="typographyDropdown"
      type="button"
    >
      Paragraph
      <svg
        class="-me-0.5 ms-1.5 size-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 9-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Heading Dropdown -->
    <ng-template #typographyDropdown>
      <div class="z-10 w-72 rounded bg-white p-2 shadow dark:bg-gray-700" cdkMenu>
        <ul class="space-y-1 text-sm font-medium" aria-labelledby="typographyDropdownButton">
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-base text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setParagraph()"
              cdkMenuItem
              type="button"
            >
              Paragraph
              <div class="space-x-1.5">
                <kbd
                  class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-400"
                >
                  Cmd
                </kbd>
                <kbd
                  class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-400"
                >
                  Alt
                </kbd>
                <kbd
                  class="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-400"
                >
                  0
                </kbd>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionParagraph {
  private readonly parent = inject(ScEditor, { host: true });

  get editor() {
    return this.parent.editor;
  }

  setParagraph() {
    this.editor.chain().focus().setParagraph().run();
  }
}
