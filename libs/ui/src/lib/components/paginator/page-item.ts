import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { ScButton } from '../button';

@Component({
  selector: 'sc-page-item',
  imports: [ScButton],
  template: `
    <li>
      <a
        [attr.aria-current]="isActive() ? 'page' : undefined"
        [variant]="isActive() ? 'outline' : 'ghost'"
        [size]="'icon'"
        (click)="selectPage()"
        sc-button
      >
        {{ page() }}
      </a>
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
