import { CdkMenuItemRadio } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { SvgCircleIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';

@Component({
  selector: 'button[sc-menu-radio-item]',
  imports: [SvgCircleIcon],
  template: `
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <svg-circle-icon class="size-2 fill-current" />
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
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.class(),
    ),
  );

  value = input('');
}
