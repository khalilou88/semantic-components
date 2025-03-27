import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'li[sc-breadcrumb-separator]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'presentation',
    '[attr.aria-hidden]': 'true',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbSeparator {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('[&_svg]:w-3.5 [&_svg]:h-3.5', this.classInput()));
}
