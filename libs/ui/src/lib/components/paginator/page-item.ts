import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { SvgEllipsisIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';

@Component({
  selector: 'sc-page-item',
  imports: [ScButton, SvgEllipsisIcon],
  template: `
    <li>
      @if (page() === '...') {
        <span class="flex h-9 w-9 items-center justify-center" [attr.aria-hidden]="true">
          <svg-ellipsis-icon class="size-4" />
          <span class="sr-only">More pages</span>
        </span>
      } @else {
        <a
          [attr.aria-current]="isActive() ? 'page' : undefined"
          [variant]="isActive() ? 'outline' : 'ghost'"
          [size]="'icon'"
          (click)="selectPage()"
          sc-button
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
