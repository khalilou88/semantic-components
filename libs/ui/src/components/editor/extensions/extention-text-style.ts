import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions';

@Component({
  selector: 'sc-extension-text-style',
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      [cdkMenuTriggerFor]="textSizeDropdown"
      type="button"
      scTooltip="Text size"
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
          d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
        />
      </svg>
      <span class="sr-only">Text size</span>
    </button>

    <ng-template #textSizeDropdown>
      <div
        class="z-10 w-72 rounded bg-white p-2 shadow dark:bg-gray-700"
        id="textSizeDropdown"
        cdkMenu
      >
        <ul class="space-y-1 text-sm font-medium" aria-labelledby="setTextSizeButton">
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-base text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setTextSize('16px')"
              data-text-size="16px"
              cdkMenuItem
              type="button"
            >
              16px (Default)
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-xs text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setTextSize('12px')"
              data-text-size="12px"
              cdkMenuItem
              type="button"
            >
              12px (Tiny)
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setTextSize('14px')"
              data-text-size="14px"
              cdkMenuItem
              type="button"
            >
              14px (Small)
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-lg text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setTextSize('18px')"
              data-text-size="18px"
              cdkMenuItem
              type="button"
            >
              18px (Lead)
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-2xl text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setTextSize('24px')"
              data-text-size="24px"
              cdkMenuItem
              type="button"
            >
              24px (Large)
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-4xl text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (cdkMenuItemTriggered)="setTextSize('36px')"
              data-text-size="36px"
              cdkMenuItem
              type="button"
            >
              36px (Huge)
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
export class ScExtensionTextStyle {
  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.textStyle.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setTextSize(fontSize: string) {
    this.editor.chain().focus().setMark('textStyle', { fontSize }).run();
  }
}
