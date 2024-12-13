import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-page',
  imports: [ScCheckbox],
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
