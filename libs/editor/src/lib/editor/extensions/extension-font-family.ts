import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-font-family',
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      [cdkMenuTriggerFor]="fontFamilyDropdown"
      type="button"
      scTooltip="Font Family"
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
          d="m10.6 19 4.298-10.93a.11.11 0 0 1 .204 0L19.4 19m-8.8 0H9.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3.021 16l1.567-3.985m0 0L7.32 5.07a.11.11 0 0 1 .205 0l2.503 6.945h-5.44Z"
        />
      </svg>
      <span class="sr-only">Font family</span>
    </button>

    <ng-template #fontFamilyDropdown>
      <div
        class="z-10 w-48 rounded bg-white p-2 shadow dark:bg-gray-700"
        id="fontFamilyDropdown"
        cdkMenu
      >
        <ul class="space-y-1 text-sm font-medium" aria-labelledby="toggleFontFamilyButton">
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 font-sans text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="Poppins, ui-sans-serif"
              cdkMenuItem
              type="button"
            >
              Default (Poppins)
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="Arial, sans-serif"
              cdkMenuItem
              type="button"
              style="font-family: Arial, sans-serif;"
            >
              Arial
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="'Courier New', monospace"
              cdkMenuItem
              type="button"
              style="font-family: 'Courier New', monospace;"
            >
              Courier New
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="Georgia, serif"
              cdkMenuItem
              type="button"
              style="font-family: Georgia, serif;"
            >
              Georgia
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="'Lucida Sans Unicode', sans-serif"
              cdkMenuItem
              type="button"
              style="font-family: 'Lucida Sans Unicode', sans-serif;"
            >
              Lucida Sans Unicode
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="Tahoma, sans-serif"
              cdkMenuItem
              type="button"
              style="font-family: Tahoma, sans-serif;"
            >
              Tahoma
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="'Times New Roman', serif;"
              cdkMenuItem
              type="button"
              style="font-family: 'Times New Roman', serif;"
            >
              Times New Roman
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="'Trebuchet MS', sans-serif"
              cdkMenuItem
              type="button"
              style="font-family: 'Trebuchet MS', sans-serif;"
            >
              Trebuchet MS
            </button>
          </li>
          <li>
            <button
              class="flex w-full items-center justify-between rounded px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              (click)="setFontFamily($event)"
              data-font-family="Verdana, sans-serif"
              cdkMenuItem
              type="button"
              style="font-family: Verdana, sans-serif;"
            >
              Verdana
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
export class ScExtensionFontFamily {
  private readonly parent = inject(ScEditor);

  extensions = inject(ScExtensions);

  constructor() {
    this.extensions.fontFamily.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setFontFamily(e: Event) {
    const fontFamily = (e.target as HTMLButtonElement).getAttribute('data-font-family');

    if (fontFamily === null) {
      throw new Error('Missing data-font-family');
    }

    this.editor.chain().focus().setFontFamily(fontFamily).run();
  }
}
