import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgPaletteIcon } from '@semantic-icons/lucide-icons';

import { ScTooltip } from '../../tooltip';
import { colors } from '../colors';
import { ScEditor } from '../editor';
import { ScExtensions } from './extensions';

@Component({
  selector: 'sc-extension-color',
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, ScTooltip, SvgPaletteIcon],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      [cdkMenuTriggerFor]="textColorDropdown"
      type="button"
      scTooltip="Text color"
    >
      <svg-palette-icon />
      <span class="sr-only">Text color</span>
    </button>

    <ng-template #textColorDropdown>
      <div
        class="z-10 w-48 rounded bg-white p-2 shadow dark:bg-gray-700"
        id="textColorDropdown"
        cdkMenu
      >
        <div
          class="group mb-3 grid grid-cols-6 items-center gap-2 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <input
            class="col-span-3 h-8 w-full rounded-md border border-gray-200 bg-gray-50 p-px px-1 hover:bg-gray-50 group-hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:group-hover:bg-gray-700"
            id="color"
            type="color"
            value="#e66465"
          />
          <label
            class="col-span-3 text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            for="color"
          >
            Pick a color
          </label>
        </div>
        <div class="mb-3 grid grid-cols-6 gap-1">
          @for (color of colors; track $index) {
            <button
              class="size-6 rounded-md"
              [style]="'background-color: ' + color"
              [attr.data-hex-color]="color"
              (click)="setHexColor($event)"
              type="button"
              cdkMenuItem
            >
              <span class="sr-only">Blue</span>
            </button>
          }
        </div>
        <button
          class="w-full rounded-lg bg-white py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-700"
          id="reset-color"
          (click)="resetColor()"
          cdkMenuItem
          type="button"
        >
          Reset color
        </button>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScExtensionColor {
  private readonly parent = inject(ScEditor, { host: true });

  extensions = inject(ScExtensions);

  colors = colors;

  constructor() {
    this.extensions.color.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  resetColor() {
    this.editor.commands.unsetColor();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHexColor(e: any) {
    const hexColor = e.target.getAttribute('data-hex-color');
    this.editor.chain().focus().setColor(hexColor).run();
  }
}
