import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox } from '@semantic-components/ui';
import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-checkbox-page',
  imports: [ScCheckbox, SvgCheckIcon],
  template: `
    <input type="checkbox" />

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <input sc-checkbox type="checkbox" />

    <br />
    <br />
    <br />
    <br />

    <div class="bg-blue-500">
      <svg-check-icon
        class=" w-4 h-4 pointer-events-none  peer-checked:block stroke-white mt-1 outline-none"
      />
    </div>

    <br />
    <br />
    <br />
    <br />

    <button
      class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      id="terms"
      type="button"
      role="checkbox"
      aria-checked="false"
      data-state="unchecked"
      value="on"
    ></button>

    <br />
    <br />
    <br />
    <br />

    <br />
    <br />
    <br />
    <br />

    <div class="w-full flex gap-2">
      <input
        class="
        peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100
        checked:bg-blue-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400
      "
        type="checkbox"
      />
      <svg
        class="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <label>My label</label>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
