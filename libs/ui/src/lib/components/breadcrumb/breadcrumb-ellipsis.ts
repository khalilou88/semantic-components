import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'span[sc-breadcrumb-ellipsis], button[sc-breadcrumb-ellipsis]',
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
export class ScBreadcrumbEllipsis {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('flex h-9 w-9 items-center justify-center', this.classInput()),
  );
}
