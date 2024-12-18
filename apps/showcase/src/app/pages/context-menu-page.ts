import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScContextMenuTriggerFor } from '@semantic-components/ui';

@Component({
  selector: 'app-context-menu-page',
  imports: [ScContextMenuTriggerFor],
  template: `
    <div
      class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
      [scContextMenuTriggerFor]="context_menu"
    >
      Right click here
    </div>

    <ng-template #context_menu>
      <div class="">
        <button class="">Cut</button>
        <button class="">Copy</button>
        <button class="">Link</button>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContextMenuPage {}
