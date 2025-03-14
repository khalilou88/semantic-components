import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

export type ButtonState = 'initial' | 'visible' | 'hidden';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  template: `
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-out"
      [ngClass]="{
        'opacity-0 translate-y-5 scale-90': state === 'initial' || state === 'hidden',
        'opacity-100 translate-y-0 scale-100': state === 'visible',
      }"
      (click)="onScrollToTop()"
      (transitionend)="onTransitionEnd($event)"
      aria-label="Scroll to top"
    >
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollToTopComponent {
  @Output() scrollToTop = new EventEmitter<void>();
  @Output() animationDone = new EventEmitter<void>();

  state: ButtonState = 'initial';

  onScrollToTop() {
    this.scrollToTop.emit();
  }

  onTransitionEnd(event: TransitionEvent) {
    // Only emit when opacity transition ends to avoid multiple emissions
    if (event.propertyName === 'opacity' && this.state === 'hidden') {
      this.animationDone.emit();
    }
  }
}
