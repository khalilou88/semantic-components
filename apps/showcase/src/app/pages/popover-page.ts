import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScInput, ScLabel, ScPopoverTriggerFor } from '@semantic-components/ui';

@Component({
  selector: 'app-popover-page',
  imports: [ScButton, ScLabel, ScInput, ScPopoverTriggerFor],
  template: `
    <button sc-button variant="outline" scPopoverTriggerFor="popover">Open popover</button>

    <ng-template #popover>
      <div class="grid gap-4">
        <div class="space-y-2">
          <h4 class="font-medium leading-none">Dimensions</h4>
          <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
        </div>
        <div class="grid gap-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="width">Width</label>
            <input class="col-span-2 h-8" id="width" sc-input defaultValue="100%" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="maxWidth">Max. width</label>
            <input class="col-span-2 h-8" id="maxWidth" sc-input defaultValue="300px" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="height">Height</label>
            <input class="col-span-2 h-8" id="height" sc-input defaultValue="25px" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <label sc-label for="maxHeight">Max. height</label>
            <input class="col-span-2 h-8" id="maxHeight" sc-input defaultValue="none" />
          </div>
        </div>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PopoverPage {}
