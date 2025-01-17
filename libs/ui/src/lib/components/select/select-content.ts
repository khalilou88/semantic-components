import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'div[sc-select-content]',
  imports: [],
  template: `
    <div class="relative h-72 overflow-hidden">
      <div class="size-full" style="overflow: hidden scroll;">
        <div style="min-width: 100%; display: table;">
          <ng-content />
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectContent {}
