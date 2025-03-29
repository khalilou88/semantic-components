import { CdkMenuItemCheckbox } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  output,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCheckIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'button[sc-menu-checkbox-item]',
  imports: [SiCheckIcon],
  template: `
    @if (scChecked()) {
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <svg class="size-4" si-check-icon></svg>
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
  private readonly _cdkMenuItemCheckbox = inject(CdkMenuItemCheckbox);

  class = input<string>('');

  classes = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      this.class(),
    ),
  );

  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  constructor() {
    effect(() => {
      this._cdkMenuItemCheckbox.disabled = this.disabled();
    });
  }

  readonly scChecked = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  readonly scTriggered = output<void>();
}
