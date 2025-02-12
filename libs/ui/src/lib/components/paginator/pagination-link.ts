import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
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
    '[variant]': 'variant()',
    '[size]': 'size()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ScButtonBase,
      inputs: ['variant', 'size'],
    },
  ],
})
export class ScPaginationLink {
  protected readonly paginatorService = inject(PaginatorService);

  readonly page = input.required<number | '...'>();

  protected readonly isActive = computed(() => {
    return this.page() === this.paginatorService.currentPage();
  });

  protected readonly variant = computed<ButtonVariants['variant']>(() =>
    this.isActive() ? 'secondary' : 'outline',
  );

  protected readonly size = signal<ButtonVariants['size']>('icon');

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
