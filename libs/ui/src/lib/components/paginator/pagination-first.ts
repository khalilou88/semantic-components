import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { ButtonVariants, ScButtonBase } from '../button';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'a[sc-pagination-first]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[disabled]': 'isPrevPageDisabled()',
    'aria-label': 'Go to first page',
    '(click)': 'firstPage()',
    '(keydown.enter)': 'firstPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationFirst extends ScButtonBase {
  override readonly variant = input<ButtonVariants['variant']>('outline');
  override readonly size = input<ButtonVariants['size']>('icon');

  private readonly paginatorService = inject(PaginatorService);

  protected isPrevPageDisabled = computed(() => {
    return this.paginatorService.currentPage() === 1;
  });

  firstPage() {
    this.paginatorService.pageChanged.set({ page: 1, pageSize: this.paginatorService.pageSize() });
  }
}
