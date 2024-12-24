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
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbSeparator {
  class = input<string>('');

  classes = computed(() => cn('[&>.svg]:w-3.5 [&>.svg]:h-3.5', this.class()));
}
