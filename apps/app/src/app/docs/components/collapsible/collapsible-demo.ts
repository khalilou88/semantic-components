import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScCollapsible,
  ScCollapsibleContent,
  ScCollapsibleToggle,
} from '@semantic-components/ui';
import { SiChevronsUpDownIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-collapsible-demo',
  imports: [
    ScCollapsible,
    ScCollapsibleToggle,
    ScCollapsibleContent,
    SiChevronsUpDownIcon,
    ScButton,
  ],
  template: `
    <sc-collapsible class="w-[350px] space-y-2">
      <div class="flex items-center justify-between space-x-4">
        <h4 class="text-sm font-semibold">&#64;peduarte starred 3 repositories</h4>
        <button class="w-9 p-0" sc-collapsible-toggle sc-button variant="outline" size="sm">
          <svg class="size-4" si-chevrons-up-down-icon></svg>
          <span class="sr-only">Toggle</span>
        </button>
      </div>
      <div class="rounded-md border px-4 py-3 font-mono text-sm">&#64;radix-ui/primitives</div>
      <sc-collapsible-content class="mt-2 space-y-2">
        <div class="rounded-md border px-4 py-3 font-mono text-sm">&#64;radix-ui/colors</div>
        <div class="mt-2 rounded-md border px-4 py-3 font-mono text-sm">&#64;stitches/react</div>
      </sc-collapsible-content>
    </sc-collapsible>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleDemo {}
