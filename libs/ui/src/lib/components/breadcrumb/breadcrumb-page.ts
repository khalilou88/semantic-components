import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

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
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbPage {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('font-normal text-foreground', this.classInput()));
}
