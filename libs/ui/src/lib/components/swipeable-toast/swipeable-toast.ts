import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-swipeable-toast',
  imports: [CommonModule],
  template: `
    <div
      *ngIf="visible"
      [class]="baseClasses"
      [class.opacity-0]="state === 'hidden'"
      [class.opacity-100]="state === 'visible'"
      [class.duration-300]="state !== 'swiping'"
      [class.ease-out]="state !== 'swiping'"
      [class.cursor-grab]="state === 'swiping'"
      [style.transform]="getTransform()"
      (touchstart)="onTouchStart($event)"
      (touchmove)="onTouchMove($event)"
      (touchend)="onTouchEnd()"
    >
      <div class="flex items-center justify-between gap-3">
        <span class="flex-grow text-sm">{{ message }}</span>
        <button
          class="text-white/80 hover:text-white text-xl leading-none focus:outline-none"
          *ngIf="showCloseButton"
          (click)="dismiss()"
        >
          ×
        </button>
      </div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSwipeableToast implements OnInit, OnDestroy {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  @Input() message = '';
  @Input() duration = 3000;
  @Input() showCloseButton = true;
  @Output() dismissed = new EventEmitter<void>();

  visible = true;
  state: 'hidden' | 'visible' | 'swiping' = 'visible';
  translateX = 0;

  private touchStartX = 0;
  private readonly SWIPE_THRESHOLD = 100;
  private timeoutId?: number;

  // Base classes for the toast container
  baseClasses = `
    fixed bottom-5 left-1/2 
    min-w-[250px] max-w-[90%]
    bg-gray-800 text-white
    px-4 py-3 rounded-lg
    shadow-lg z-50
    touch-pan-x select-none
    transition-all transform
  `.trim();

  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    // Start hidden
    this.state = 'hidden';

    // Transition to visible after a frame
    requestAnimationFrame(() => {
      this.state = 'visible';

      if (this.duration > 0) {
        this.timeoutId = window.setTimeout(() => this.dismiss(), this.duration);
      }
    });
  }

  getTransform(): string {
    if (this.state === 'swiping') {
      return `translateX(calc(-50% + ${this.translateX}px))`;
    }
    return this.state === 'hidden' ? 'translateX(100%)' : 'translateX(-50%)';
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.state = 'swiping';

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  onTouchMove(event: TouchEvent) {
    if (this.state === 'swiping') {
      const deltaX = event.touches[0].clientX - this.touchStartX;
      if (deltaX > 0) {
        // Only allow right swipe
        this.translateX = deltaX;
        event.preventDefault();
      }
    }
  }

  onTouchEnd() {
    if (this.translateX > this.SWIPE_THRESHOLD) {
      this.dismiss();
    } else {
      this.translateX = 0;
      this.state = 'visible';

      if (this.duration > 0) {
        this.timeoutId = window.setTimeout(() => this.dismiss(), this.duration);
      }
    }
  }

  dismiss() {
    this.state = 'hidden';
    setTimeout(() => {
      this.visible = false;
      this.dismissed.emit();
    }, 300); // Match the transition duration
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
