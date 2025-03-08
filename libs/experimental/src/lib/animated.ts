import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lib-animated',
  imports: [],
  template: `
    <div
      class="p-6 bg-white rounded-lg shadow-md transform transition-all duration-300 ease-in-out opacity-100 translate-y-0"
    >
      <h2 class="text-xl font-bold mb-4">Animated Content</h2>
      <p class="mb-4">This content will animate when exiting</p>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        (click)="close.emit()"
      >
        Close
      </button>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedContent {
  @Output() close = new EventEmitter<void>();

  constructor(private readonly elementRef: ElementRef) {}

  startExitAnimation(callback: () => void) {
    const element = this.elementRef.nativeElement.firstChild;

    // Add Tailwind classes to trigger exit animation
    element.classList.remove(['opacity-100', 'translate-y-0']);
    element.classList.add(['opacity-0', 'translate-y-10']);

    element.addEventListener(
      'transitionend',
      () => {
        callback();
      },
      { once: true },
    );
  }
}
