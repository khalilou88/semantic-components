import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToggleGroup, ScToggleItem } from '@semantic-components/ui';
import { SiAlignCenterIcon, SiAlignLeftIcon, SiAlignRightIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-toggle-group-demo',
  imports: [ScToggleGroup, ScToggleItem, SiAlignLeftIcon, SiAlignCenterIcon, SiAlignRightIcon],
  template: `
    <sc-toggle-group>
      <button value="left" aria-label="Left aligned" sc-toggle-item>
        <svg si-align-left-icon></svg>
      </button>
      <button value="center" aria-label="Center aligned" sc-toggle-item>
        <svg si-align-center-icon></svg>
      </button>
      <button value="right" aria-label="Right aligned" sc-toggle-item>
        <svg si-align-right-icon></svg>
      </button>
    </sc-toggle-group>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleGroupDemo {}
