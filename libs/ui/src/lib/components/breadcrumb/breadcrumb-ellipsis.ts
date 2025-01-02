import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiEllipsisIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'span[sc-breadcrumb-ellipsis]',
  imports: [SiEllipsisIcon],
  template: `
    <svg class="size-4" si-ellipsis-icon></svg>
    <span class="sr-only">More</span>
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
export class ScBreadcrumbEllipsis {
  class = input<string>('');

  classes = computed(() => cn('flex h-9 w-9 items-center justify-center', this.class()));
}
