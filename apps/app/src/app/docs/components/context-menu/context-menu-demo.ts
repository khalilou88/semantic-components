import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScContextMenuTriggerFor, ScMenu, ScMenuItem } from '@semantic-components/ui';

@Component({
  selector: 'app-context-menu-demo',
  imports: [ScContextMenuTriggerFor, ScMenu, ScMenuItem],
  template: `
    <div
      class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
      [scContextMenuTriggerFor]="context_menu"
    >
      Right click here
    </div>

    <ng-template #context_menu>
      <div sc-menu>
        <button sc-menu-item>Cut</button>
        <button sc-menu-item>Copy</button>
        <button sc-menu-item>Link</button>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuDemo {}
