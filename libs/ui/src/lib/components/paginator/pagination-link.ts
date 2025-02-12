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

  override readonly variant = input<ButtonVariants['variant']>('outline');

  //   this.isActive() ? 'secondary' : 'outline',

  override readonly size = input<ButtonVariants['size']>('icon');

  readonly page = input.required<number | '...'>();

  protected readonly isActive = computed(() => {
    return this.page() === this.paginatorService.currentPage();
  });

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
