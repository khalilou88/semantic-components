import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  linkedSignal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ButtonVariants, ScButtonBase, buttonVariants } from '../button';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'a[sc-pagination-next]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'aria-label': 'Go to next page',
    '(click)': 'nextPage()',
    '(keydown.enter)': 'nextPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationNext extends ScButtonBase {
  override readonly variant = linkedSignal<ButtonVariants['variant']>(() =>
    this.paginatorService.paginationLinkVariant(),
  );

  protected override readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      this.size() === 'default' && 'gap-1 pr-2.5',
      this.classInput(),
    ),
  );

  override readonly disabled = linkedSignal<boolean>(() =>
    this.paginatorService.isNextPageDisabled(),
  );

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
