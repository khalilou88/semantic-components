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

@Component({
  selector: 'sc-page-item',
  imports: [ScLink, SiEllipsisIcon],
  template: `
    <li>
      @if (page() === '...') {
        <span class="flex size-9 items-center justify-center" [attr.aria-hidden]="true">
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
  currentPage = input.required<number>();
  page = input.required<number | '...'>();

  pageChanged = output<number>();

  isActive = computed(() => {
    return this.page() === this.currentPage();
  });

  selectPage() {
    const page = this.page();
    if (page !== '...' && page !== this.currentPage()) {
      this.pageChanged.emit(page);
    }
  }
}
