import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ol[sc-breadcrumb-list]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-breadcrumb-list]': 'true',
  },
  styles: `
    .sc-breadcrumb-list {
      @apply flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbList {}
