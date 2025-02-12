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
  selector: 'a[sc-pagination-first]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'aria-label': 'Go to first page',
    '(click)': 'firstPage()',
    '(keydown.enter)': 'firstPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationFirst extends ScButtonBase {
  override readonly variant = linkedSignal<ButtonVariants['variant']>(() =>
    this.paginatorService.paginationLinkVariant(),
  );
  override readonly size = linkedSignal<ButtonVariants['size']>(() => 'icon');
  override readonly disabled = linkedSignal<boolean>(() =>
    this.paginatorService.isPrevPageDisabled(),
  );

  protected readonly paginatorService = inject(PaginatorService);

  protected firstPage() {
    this.paginatorService.pageChanged.set({ page: 1, pageSize: this.paginatorService.pageSize() });
  }
}
