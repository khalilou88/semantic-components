import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { SiEllipsisIcon } from '@semantic-icons/lucide-icons';

import { ScLink } from '../link';
import { ScPaginationEllipsis } from './pagination-ellipsis';

@Component({
  selector: 'sc-page-item',
  imports: [ScLink, SiEllipsisIcon, ScPaginationEllipsis],
  template: `
    <li>
      @if (page() === '...') {
        <span sc-pagination-ellipsis>
          <svg class="size-4" si-ellipsis-icon></svg>
          <span class="sr-only">More pages</span>
        </span>
      } @else {
        <a
          [attr.aria-current]="isActive() ? 'page' : undefined"
          [variant]="isActive() ? 'secondary' : 'outline'"
          [size]="'icon'"
          (click)="selectPage()"
          (keydown.enter)="selectPage()"
          sc-link
          href="javascript:void(0)"
        >
          {{ page() }}
        </a>
      }
    </li>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPageItem {
  readonly currentPage = input.required<number>();
  readonly page = input.required<number | '...'>();

  readonly pageChanged = output<number>();

  protected readonly isActive = computed(() => {
    return this.page() === this.currentPage();
  });

  protected selectPage() {
    const page = this.page();
    if (page !== '...' && page !== this.currentPage()) {
      this.pageChanged.emit(page);
    }
  }
}
