import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  linkedSignal,
} from '@angular/core';

import { ButtonVariants, ScButtonBase } from '../button';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'a[sc-pagination-link]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[attr.aria-current]': "isActive() ? 'page' : undefined",
    '(click)': 'selectPage()',
    '(keydown.enter)': 'selectPage()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPaginationLink extends ScButtonBase {
  protected readonly paginatorService = inject(PaginatorService);

  readonly page = input.required<number | '...'>();

  protected readonly isActive = computed(() => {
    return this.page() === this.paginatorService.currentPage();
  });

  protected override readonly variant = linkedSignal<ButtonVariants['variant']>(() =>
    this.isActive() ? 'secondary' : 'outline',
  );

  protected override readonly size = linkedSignal<ButtonVariants['size']>(() => 'icon');

  protected selectPage() {
    const page = this.page();
    if (page !== '...' && page !== this.paginatorService.currentPage()) {
      this.paginatorService.pageChanged.set({
        page: page,
        pageSize: this.paginatorService.pageSize(),
      });
    }
  }
}
