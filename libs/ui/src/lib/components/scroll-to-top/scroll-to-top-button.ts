import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiArrowUpIcon } from '@semantic-icons/lucide-icons';

import { ScButtonBase, buttonVariants } from '../button';

@Component({
  selector: 'button[sc-scroll-to-top-button]',
  imports: [CommonModule, SiArrowUpIcon],
  template: `
    <svg class="size-6" si-arrow-up-icon></svg>
  `,
  host: {
    '(click)': 'scrollToTop()',
    '(window:scroll)': 'onWindowScroll()',
    'aria-label': 'Scroll to top',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollToTopButton extends ScButtonBase {
  protected override readonly class = computed(() =>
    cn(
      buttonVariants({ variant: this.variant(), size: this.size() }),
      'fixed bottom-6 right-6 size-12 rounded-full shadow-lg transition-all duration-300 ease-out pointer-events-none',
      !this.showScrollButton() && 'opacity-0 translate-y-5 scale-90',
      this.showScrollButton() && 'opacity-100 translate-y-0 scale-100 pointer-events-auto',
      this.classInput(),
    ),
  );

  protected readonly showScrollButton = signal(false);

  protected onWindowScroll() {
    // Show button when page is scrolled down 300px
    this.showScrollButton.set(window.scrollY > 300);
  }

  protected scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
