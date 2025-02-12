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
  selector: 'a[sc-pagination-last]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'aria-label': 'Go to last page',
    '(click)': 'lastPage()',
    '(keydown.enter)': 'lastPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationLast extends ScButtonBase {
  override readonly variant = linkedSignal<ButtonVariants['variant']>(() => 'outline');
  override readonly size = linkedSignal<ButtonVariants['size']>(() => 'icon');
  override readonly disabled = linkedSignal<boolean>(() =>
    this.paginatorService.isNextPageDisabled(),
  );

  private readonly paginatorService = inject(PaginatorService);

  protected lastPage() {
    this.paginatorService.pageChanged.set({
      page: this.paginatorService.numberOfPages(),
      pageSize: this.paginatorService.pageSize(),
    });
  }
}
