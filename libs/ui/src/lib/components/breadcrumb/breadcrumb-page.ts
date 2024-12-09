import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'span[sc-breadcrumb-page]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'link',
    '[attr.aria-disabled]': 'true',
    '[attr.aria-current]': '"page"',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbPage {
  class = input<string>('');

  classes = computed(() => cn('font-normal text-foreground', this.class()));
}
