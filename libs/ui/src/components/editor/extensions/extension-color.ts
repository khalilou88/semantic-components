import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ScExtensions } from '../extensions';

@Component({
  selector: 'sc-extension-color',
  imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem, ScTooltip],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      [cdkMenuTriggerFor]="textColorDropdown"
      type="button"
      scTooltip="Text color"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m6.532 15.982 1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4 2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0H8.1m.006 0h5.654m0 0 .617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996-1.053 0-1.907-.894-1.907-1.996 0-1.103 1.907-4.128 1.907-4.128s1.909 3.025 1.909 4.128Z"
        />
      </svg>
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
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#1A56DB"
            cdkMenuItem
            style="background-color: #1A56DB"
          >
            <span class="sr-only">Blue</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            cdkMenuItem
            type="button"
            data-hex-color="#0E9F6E"
            style="background-color: #0E9F6E"
          >
            <span class="sr-only">Green</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            cdkMenuItem
            type="button"
            data-hex-color="#FACA15"
            style="background-color: #FACA15"
          >
            <span class="sr-only">Yellow</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#F05252"
            cdkMenuItem
            style="background-color: #F05252"
          >
            <span class="sr-only">Red</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#FF8A4C"
            cdkMenuItem
            style="background-color: #FF8A4C"
          >
            <span class="sr-only">Orange</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#0694A2"
            cdkMenuItem
            style="background-color: #0694A2"
          >
            <span class="sr-only">Teal</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#B4C6FC"
            cdkMenuItem
            style="background-color: #B4C6FC"
          >
            <span class="sr-only">Light indigo</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#8DA2FB"
            cdkMenuItem
            style="background-color: #8DA2FB"
          >
            <span class="sr-only">Indigo</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#5145CD"
            cdkMenuItem
            style="background-color: #5145CD"
          >
            <span class="sr-only">Purple</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#771D1D"
            cdkMenuItem
            style="background-color: #771D1D"
          >
            <span class="sr-only">Brown</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#FCD9BD"
            cdkMenuItem
            style="background-color: #FCD9BD"
          >
            <span class="sr-only">Light orange</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#99154B"
            cdkMenuItem
            style="background-color: #99154B"
          >
            <span class="sr-only">Bordo</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#7E3AF2"
            cdkMenuItem
            style="background-color: #7E3AF2"
          >
            <span class="sr-only">Dark Purple</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#CABFFD"
            cdkMenuItem
            style="background-color: #CABFFD"
          >
            <span class="sr-only">Light</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#D61F69"
            cdkMenuItem
            style="background-color: #D61F69"
          >
            <span class="sr-only">Dark Pink</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#F8B4D9"
            cdkMenuItem
            style="background-color: #F8B4D9"
          >
            <span class="sr-only">Pink</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#F6C196"
            cdkMenuItem
            style="background-color: #F6C196"
          >
            <span class="sr-only">Cream</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#A4CAFE"
            cdkMenuItem
            style="background-color: #A4CAFE"
          >
            <span class="sr-only">Light Blue</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#5145CD"
            cdkMenuItem
            style="background-color: #5145CD"
          >
            <span class="sr-only">Dark Blue</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#B43403"
            cdkMenuItem
            style="background-color: #B43403"
          >
            <span class="sr-only">Orange Brown</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#FCE96A"
            cdkMenuItem
            style="background-color: #FCE96A"
          >
            <span class="sr-only">Light Yellow</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#1E429F"
            cdkMenuItem
            style="background-color: #1E429F"
          >
            <span class="sr-only">Navy Blue</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#768FFD"
            cdkMenuItem
            style="background-color: #768FFD"
          >
            <span class="sr-only">Light Purple</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#BCF0DA"
            cdkMenuItem
            style="background-color: #BCF0DA"
          >
            <span class="sr-only">Light Green</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#EBF5FF"
            cdkMenuItem
            style="background-color: #EBF5FF"
          >
            <span class="sr-only">Sky Blue</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#16BDCA"
            cdkMenuItem
            style="background-color: #16BDCA"
          >
            <span class="sr-only">Cyan</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#E74694"
            cdkMenuItem
            style="background-color: #E74694"
          >
            <span class="sr-only">Pink</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#83B0ED"
            cdkMenuItem
            style="background-color: #83B0ED"
          >
            <span class="sr-only">Darker Sky Blue</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#03543F"
            cdkMenuItem
            style="background-color: #03543F"
          >
            <span class="sr-only">Forest Green</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#111928"
            cdkMenuItem
            style="background-color: #111928"
          >
            <span class="sr-only">Black</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#4B5563"
            cdkMenuItem
            style="background-color: #4B5563"
          >
            <span class="sr-only">Stone</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#6B7280"
            cdkMenuItem
            style="background-color: #6B7280"
          >
            <span class="sr-only">Gray</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#D1D5DB"
            cdkMenuItem
            style="background-color: #D1D5DB"
          >
            <span class="sr-only">Light Gray</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#F3F4F6"
            cdkMenuItem
            style="background-color: #F3F4F6"
          >
            <span class="sr-only">Cloud Gray</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#F3F4F6"
            cdkMenuItem
            style="background-color: #F3F4F6"
          >
            <span class="sr-only">Cloud Gray</span>
          </button>
          <button
            class="size-6 rounded-md"
            (click)="setHexColor($event)"
            type="button"
            data-hex-color="#F9FAFB"
            cdkMenuItem
            style="background-color: #F9FAFB"
          >
            <span class="sr-only">Heaven Gray</span>
          </button>
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
