import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'li[sc-breadcrumb-item]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-breadcrumb-item]': 'true',
  },
  styles: `
    .sc-breadcrumb-item {
      @apply inline-flex items-center gap-1.5;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbItem {}
