import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AnimatedContainer, AnimationState } from './animated-container';

@Component({
  selector: 'lib-animation-demo',
  imports: [AnimatedContainer, FormsModule],
  template: `
    <div class="p-6 max-w-md mx-auto space-y-4">
      <div class="flex space-x-3 mb-6">
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          (click)="toggleVisibility()"
        >
          {{ isVisible ? 'Hide' : 'Show' }} Content
        </button>

        <select class="px-4 py-2 border rounded" [(ngModel)]="currentAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
          <option value="zoom">Zoom</option>
          <option value="collapse">Collapse</option>
        </select>

        <select class="px-4 py-2 border rounded" [(ngModel)]="animationSpeed">
          <option value="fast">Fast</option>
          <option value="normal">Normal</option>
          <option value="slow">Slow</option>
        </select>
      </div>

      <div class="p-4 bg-gray-100 rounded">
        Current state:
        <span class="font-bold">{{ componentState }}</span>
      </div>

      <lib-animated-container
        [state]="isVisible ? 'visible' : 'hidden'"
        [animation]="currentAnimation"
        [duration]="animationSpeed"
        (stateChange)="onStateChange($event)"
      >
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-lg font-bold mb-3">Animated Content</h3>
          <p>This content will animate when entering and exiting.</p>
          <p class="mt-2">Try different animation types and speeds!</p>
        </div>
      </lib-animated-container>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimationDemo {
  isVisible = true;
  currentAnimation: 'fade' | 'slide' | 'zoom' | 'collapse' = 'fade';
  animationSpeed: 'fast' | 'normal' | 'slow' = 'normal';
  componentState: AnimationState = 'visible';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  onStateChange(state: AnimationState) {
    this.componentState = state;
  }
}
