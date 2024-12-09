import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgEllipsisIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'span[sc-breadcrumb-elipssis]',
  imports: [SvgEllipsisIcon],
  template: `
    <svg-ellipsis-icon class="size-4" />
    <span class="sr-only">More</span>
  `,
  host: {
    role: 'presentation',
    '[attr.aria-hidden]': 'true',
    '[class.sc-breadcrumb-elipssis]': 'true',
  },
  styles: `
    .sc-breadcrumb-elipssis {
      @apply flex h-9 w-9 items-center justify-center;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbElipssis {}
