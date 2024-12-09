import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'span[sc-breadcrumb-page]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'link',
    '[attr.aria-disabled]': 'true',
    '[attr.aria-current]': '"page"',
    '[class.sc-breadcrumb-page]': 'true',
  },
  styles: `
    .sc-breadcrumb-page {
      @apply font-normal text-foreground;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbPage {}
