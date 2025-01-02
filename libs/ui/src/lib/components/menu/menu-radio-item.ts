import { CdkMenuItemRadio } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCircleIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'button[sc-menu-radio-item]',
  imports: [SiCircleIcon],
  template: `
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <svg class="size-2 fill-current" si-circle-icon></svg>
    </span>

    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkMenuItemRadio],
})
export class ScMenuRadioItem {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      this.class(),
    ),
  );

  value = input('');
}
