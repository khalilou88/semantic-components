import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-swipeable-toast',
  imports: [],
  template: `
    @if (isVisible) {
      <div class="fixed bottom-4 right-4 z-50">
        <div
          class="bg-white rounded-lg shadow-lg p-4 w-72 cursor-grab active:cursor-grabbing"
          [style.transform]="'translateX(' + currentX + 'px)'"
          [class.transition-transform]="!isDragging"
          [class.duration-200]="!isDragging"
          (touchstart)="handleTouchStart($event)"
          (touchmove)="handleTouchMove($event)"
          (touchend)="handleTouchEnd()"
          (mousedown)="handleMouseDown($event)"
          (mousemove)="handleMouseMove($event)"
          (mouseup)="handleMouseUp()"
          (mouseleave)="handleMouseUp()"
        >
          <div class="flex items-center justify-between">
            <p class="text-gray-800 pr-4">{{ message() }}</p>
            <button
              class="text-gray-500 hover:text-gray-700 transition-colors"
              (click)="handleClose()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="mt-2 h-1 w-full bg-gray-100 rounded">
            <div class="h-full bg-blue-500 rounded" [style.width.%]="progressWidth"></div>
          </div>
        </div>
      </div>
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSwipeableToast {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  readonly message = input('This is a toast message');

  isVisible = true;
  isDragging = false;
  startX = 0;
  currentX = 0;
  progressWidth = 100;

  handleTouchStart(event: TouchEvent): void {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  handleMouseDown(event: MouseEvent): void {
    this.startX = event.clientX;
    this.isDragging = true;
  }

  handleTouchMove(event: TouchEvent): void {
    if (!this.isDragging) return;
    const currentX = event.touches[0].clientX;
    const diff = currentX - this.startX;
    this.updatePosition(diff);
  }

  handleMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault();
    const diff = event.clientX - this.startX;
    this.updatePosition(diff);
  }

  handleTouchEnd(): void {
    this.handleDragEnd();
  }

  handleMouseUp(): void {
    this.handleDragEnd();
  }

  private updatePosition(diff: number): void {
    this.currentX = Math.min(Math.max(diff, -200), 0);
    this.progressWidth = Math.max(100 + this.currentX / 2, 0);
  }

  private handleDragEnd(): void {
    this.isDragging = false;
    if (this.currentX < -100) {
      this.isVisible = false;
    } else {
      this.currentX = 0;
      this.progressWidth = 100;
    }
  }

  handleClose(): void {
    this.isVisible = false;
  }
}
