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
  selector: 'a[sc-pagination-previous]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[disabled]': 'paginatorService.isPrevPageDisabled()',
    'aria-label': 'Go to previous page',
    '(click)': 'prevPage()',
    '(keydown.enter)': 'prevPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationPrevious extends ScButtonBase {
  override readonly variant = linkedSignal<ButtonVariants['variant']>(() => 'outline');
  override readonly size = linkedSignal<ButtonVariants['size']>(() => 'icon');

  protected readonly paginatorService = inject(PaginatorService);

  protected prevPage() {
    if (!this.paginatorService.isPrevPageDisabled()) {
      this.paginatorService.pageChanged.set({
        page: this.paginatorService.currentPage() - 1,
        pageSize: this.paginatorService.pageSize(),
      });
    }
  }
}
