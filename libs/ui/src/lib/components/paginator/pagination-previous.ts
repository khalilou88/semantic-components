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
  selector: 'a[sc-pagination-previous]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    'aria-label': 'Go to previous page',
    '(click)': 'prevPage()',
    '(keydown.enter)': 'prevPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationPrevious extends ScButtonBase {
  override readonly variant = linkedSignal<ButtonVariants['variant']>(() =>
    this.paginatorService.paginationLinkVariant(),
  );

  protected override readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      this.size() === 'default' && 'gap-1 pl-2.5',
      this.classInput(),
    ),
  );

  override readonly disabled = linkedSignal<boolean>(() =>
    this.paginatorService.isPrevPageDisabled(),
  );

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
