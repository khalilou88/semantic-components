import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScToggle } from '@semantic-components/ui';
import { SiBoldIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-toggle-demo',
  imports: [ScToggle, SiBoldIcon],
  template: `
    <button sc-toggle aria-label="Toggle italic">
      <svg class="h-4 w-4" si-bold-icon></svg>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleDemo {}
