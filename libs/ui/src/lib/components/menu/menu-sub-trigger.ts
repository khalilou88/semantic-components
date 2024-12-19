import { CdkMenuTrigger } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  input,
} from '@angular/core';

import { SvgChevronRightIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';
import { ScMenuButton } from './menu-button';

@Component({
  selector: 'sc-menu-sub-trigger',
  imports: [SvgChevronRightIcon],
  template: `
    <ng-content />
    <svg-chevron-right-icon class="ml-auto" />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ScMenuButton,
    {
      directive: CdkMenuTrigger,
      inputs: ['cdkMenuTriggerFor: scMenuSubTriggerFor'],
    },
  ],
})
export class ScMenuSubTrigger {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  readonly _inset = input<boolean, unknown>(false, {
    alias: 'inset',
    transform: booleanAttribute,
  });

  scMenuSubTriggerFor = input.required();
}
