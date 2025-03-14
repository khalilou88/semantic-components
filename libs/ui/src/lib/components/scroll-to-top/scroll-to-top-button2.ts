import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  output,
  signal,
} from '@angular/core';

import { SiArrowUpIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';

export type ButtonState = 'initial' | 'visible' | 'hidden';

@Component({
  selector: 'sc-scroll-to-top-button2',
  imports: [NgClass, ScButton, SiArrowUpIcon],
  template: `
    <button
      class="size-12 rounded-full shadow-lg transition-all duration-300 ease-out"
      [ngClass]="{
        'opacity-0 translate-y-5 scale-90': state() === 'initial' || state() === 'hidden',
        'opacity-100 translate-y-0 scale-100': state() === 'visible',
      }"
      (click)="onScrollToTop()"
      (transitionend)="onTransitionEnd($event)"
      sc-button
      aria-label="Scroll to top"
    >
      <svg class="size-6" si-arrow-up-icon></svg>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollToTopButton2 {
  readonly scrollToTop = output<void>();
  readonly animationDone = output<void>();

  readonly state = signal<ButtonState>('initial');

  protected onScrollToTop() {
    this.scrollToTop.emit();
  }

  protected onTransitionEnd(event: TransitionEvent) {
    // Only emit when opacity transition ends to avoid multiple emissions
    if (event.propertyName === 'opacity' && this.state() === 'hidden') {
      this.animationDone.emit();
    }
  }
}
