import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav[sc-breadcrumb]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[attr.aria-label]': 'breadcrumb',
    '[class.sc-breadcrumb]': 'true',
  },
  styles: `
    .sc-breadcrumb {
      @apply flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumb {}
