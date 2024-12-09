import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'a[sc-breadcrumb-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-breadcrumb-link]': 'true',
  },
  styles: `
    .sc-breadcrumb-link {
      @apply transition-colors hover:text-foreground;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbLink {}
