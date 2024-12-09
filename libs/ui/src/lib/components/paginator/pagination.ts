import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav[sc-pagination]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    role: 'navigation',
    '[attr.aria-label]': '"pagination"',
    '[class.sc-pagination]': 'true',
  },
  styles: `
    .sc-pagination {
      @apply mx-auto flex w-full justify-center;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPagination {}
