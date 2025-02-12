import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  linkedSignal,
} from '@angular/core';

import { ButtonVariants, ScButtonBase } from '../button';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'a[sc-pagination-next]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[disabled]': 'paginatorService.isNextPageDisabled()',
    'aria-label': 'Go to next page',
    '(click)': 'nextPage()',
    '(keydown.enter)': 'nextPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext extends ScButtonBase {
  override readonly variant = linkedSignal<ButtonVariants['variant']>(() => 'outline');
  override readonly size = linkedSignal<ButtonVariants['size']>(() => 'icon');

  private readonly paginatorService = inject(PaginatorService);

  protected nextPage() {
    if (!this.paginatorService.isNextPageDisabled()) {
      this.paginatorService.pageChanged.set({
        page: this.paginatorService.currentPage() + 1,
        pageSize: this.paginatorService.pageSize(),
      });
    }
  }
}
