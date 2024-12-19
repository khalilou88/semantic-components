import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import {
  ScButton,
  ScCollapsible,
  ScCollapsibleContent,
  ScCollapsibleTrigger,
} from '@semantic-components/ui';
import { SvgChevronsUpDownIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-collapsible-page',
  imports: [
    ScCollapsible,
    ScCollapsibleTrigger,
    ScCollapsibleContent,
    SvgChevronsUpDownIcon,
    ScButton,
  ],
  template: `
    <div class="m-10">
      <sc-collapsible class="w-[350px] space-y-2">
        <div class="flex items-center justify-between space-x-4 px-4">
          <h4 class="text-sm font-semibold">&#64;peduarte starred 3 repositories</h4>
          <sc-collapsible-trigger>
            <button class="w-9 p-0" sc-button variant="ghost" size="sm">
              <svg-chevrons-up-down-icon class="size-4" />
              <span class="sr-only">Toggle</span>
            </button>
          </sc-collapsible-trigger>
        </div>
        <div class="rounded-md border px-4 py-3 font-mono text-sm">&#64;radix-ui/primitives</div>
        <sc-collapsible-content class="space-y-2">
          <div class="rounded-md border px-4 py-3 font-mono text-sm">&#64;radix-ui/colors</div>
          <div class="rounded-md border px-4 py-3 font-mono text-sm">&#64;stitches/react</div>
        </sc-collapsible-content>
      </sc-collapsible>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CollapsiblePage {}