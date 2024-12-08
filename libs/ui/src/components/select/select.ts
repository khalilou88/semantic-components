import { CdkMenu, CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { SvgChevronDownIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-select',
  imports: [SvgChevronDownIcon, CdkMenuTrigger, CdkMenu],
  template: `
    <button
      class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      [cdkMenuTriggerFor]="options"
      type="menu"
    >
      {{ placeholder() }}
      <svg-chevron-down-icon class="h-4 w-4 opacity-50" />
    </button>

    <ng-template #options>
      <div
        class="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        cdkMenu
      >
        <ng-content />
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect {
  placeholder = input<string>('');
}
