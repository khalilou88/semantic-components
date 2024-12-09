import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'li[sc-breadcrumb-separator]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'presentation',
    '[attr.aria-hidden]': 'true',
  },
  styles: `
    sc-breadcrumb-separator {
      @apply [&>svg]:w-3.5 [&>svg]:h-3.5;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbSeparator {}
