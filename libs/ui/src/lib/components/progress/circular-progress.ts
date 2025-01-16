import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  computed,
  input,
  numberAttribute,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-circular-progress',
  imports: [],
  template: `
    <svg class="relative transform -rotate-90" [attr.height]="radius * 2" [attr.width]="radius * 2">
      <!-- Background Circle -->
      <circle
        class="text-gray-200 fill-transparent"
        [attr.stroke-width]="stroke"
        [attr.r]="normalizedRadius"
        [attr.cx]="radius"
        [attr.cy]="radius"
        stroke="currentColor"
      ></circle>

      <!-- Progress Circle -->
      <circle
        class="text-primary fill-transparent transition-all duration-300"
        [attr.stroke-width]="stroke"
        [attr.r]="normalizedRadius"
        [attr.cx]="radius"
        [attr.cy]="radius"
        [attr.stroke-dasharray]="circumference"
        [attr.stroke-dashoffset]="strokeDashoffset"
        stroke="currentColor"
        stroke-linecap="round"
      ></circle>
    </svg>

    <!-- Progress Text -->
    <div class="absolute flex items-center justify-center text-primary font-semibold text-xl">
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
export class ScCircularProgress implements OnInit {
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

  radius = 50; // Radius of the circle
  stroke = 8; // Thickness of the stroke

  normalizedRadius!: number; // Adjusted radius for the stroke width
  circumference!: number; // Circle circumference
  strokeDashoffset!: number; // Dash offset for progress

  ngOnInit(): void {
    this.normalizedRadius = this.radius - this.stroke * 0.5;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
    this.updateProgress();
  }

  ngOnChanges(): void {
    this.updateProgress();
  }

  updateProgress(): void {
    // Calculate stroke-dashoffset based on progress
    this.strokeDashoffset = this.circumference - (this.value() / 100) * this.circumference;
  }
}
