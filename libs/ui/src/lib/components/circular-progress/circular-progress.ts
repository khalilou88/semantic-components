import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  numberAttribute,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-circular-progress',
  imports: [],
  template: `
    <svg class="relative -rotate-90" [attr.height]="radius() * 2" [attr.width]="radius() * 2">
      <!-- Background Circle -->
      <circle
        class="fill-transparent text-gray-200"
        [attr.stroke-width]="stroke()"
        [attr.r]="normalizedRadius()"
        [attr.cx]="radius()"
        [attr.cy]="radius()"
        stroke="currentColor"
      ></circle>

      <!-- Progress Circle -->
      <circle
        class="fill-transparent text-primary transition-all duration-300"
        [attr.stroke-width]="stroke()"
        [attr.r]="normalizedRadius()"
        [attr.cx]="radius()"
        [attr.cy]="radius()"
        [attr.stroke-dasharray]="circumference()"
        [attr.stroke-dashoffset]="strokeDashoffset()"
        stroke="currentColor"
        stroke-linecap="round"
      ></circle>
    </svg>

    <!-- Progress Text -->
    <div class="absolute flex items-center justify-center text-xl font-semibold text-primary">
      {{ value() }}%
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCircularProgress {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('flex justify-center items-center relative h-[100px] w-[100px]', this.classInput()),
  );

  // Progress percentage
  readonly value = input<number, unknown>(0, {
    transform: numberAttribute,
  });

  protected readonly radius = signal(50); // Radius of the circle
  protected readonly stroke = signal(8); // Thickness of the stroke

  // Adjusted radius for the stroke width
  protected readonly normalizedRadius = computed(() => this.radius() - this.stroke() * 0.5);

  // Circle circumference
  protected readonly circumference = computed(() => this.normalizedRadius() * 2 * Math.PI);

  // Dash offset for progress
  // Calculate stroke-dashoffset based on progress
  protected readonly strokeDashoffset = computed(() => {
    return this.circumference() - (this.value() / 100) * this.circumference();
  });
}
