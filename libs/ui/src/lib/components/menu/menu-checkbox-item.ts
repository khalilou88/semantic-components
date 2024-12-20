import { CdkMenuItemCheckbox } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
  output,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'button[sc-menu-checkbox-item]',
  imports: [SvgCheckIcon],
  template: `
    @if (scChecked()) {
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <svg-check-icon class="size-4" />
      </span>
    }
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CdkMenuItemCheckbox,
      inputs: ['cdkMenuItemChecked: scChecked'],
      outputs: ['cdkMenuItemTriggered: scTriggered'],
    },
  ],
})
export class ScMenuCheckboxItem {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.class(),
    ),
  );

  readonly scChecked = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  readonly scTriggered = output<void>();
}
