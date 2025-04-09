import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'sc-rating',
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <div class="flex">
        <ng-container *ngFor="let position of positions; let i = index">
          <button
            class="relative"
            (mouseenter)="onHover(position)"
            (mouseleave)="onHover(0)"
            (click)="onRate(position)"
          >
            <!-- Base star (gray background) -->
            <svg class="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>

            <!-- Left half star (for 0.5 increments) -->
            <div
              class="absolute top-0 left-0 overflow-hidden"
              *ngIf="isHalfOrFullStar(position)"
              [style.width]="isHalfStar(position) ? '50%' : '100%'"
            >
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>

            <!-- Hover effect overlay -->
            <div
              class="absolute top-0 left-0"
              *ngIf="interactive() && hoverRating >= position"
              [style.width]="
                isHalfValue(hoverRating) && Math.ceil(hoverRating) === position ? '50%' : '100%'
              "
            >
              <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
          </button>
        </ng-container>
      </div>
      <span class="ml-2 text-sm text-gray-600" *ngIf="showRatingValue()">
        {{ rating.toFixed(1) }}
      </span>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRating implements OnInit, OnChanges {
  readonly maxRating = input(5);
  @Input() rating = 0;
  readonly interactive = input(true);
  readonly showRatingValue = input(false);
  readonly allowHalfStars = input(true);
  @Output() ratingChange = new EventEmitter<number>();

  positions: number[] = [];
  hoverRating = 0;
  Math = Math; // Make Math available in the template

  ngOnInit() {
    this.generatePositions();
  }

  ngOnChanges() {
    this.generatePositions();
  }

  generatePositions() {
    this.positions = Array.from({ length: this.maxRating() }, (_, i) => i + 1);
  }

  onHover(position: number) {
    if (!this.interactive()) return;
    this.hoverRating = position;
  }

  onRate(position: number) {
    if (!this.interactive()) return;
    if (this.rating === position && this.allowHalfStars()) {
      // If clicking the same star, toggle between whole and half star
      this.rating = position - 0.5;
    } else {
      this.rating = position;
    }
    this.ratingChange.emit(this.rating);
  }

  isHalfOrFullStar(position: number): boolean {
    return this.rating >= position - 0.5;
  }

  isHalfStar(position: number): boolean {
    return Math.ceil(this.rating) === position && this.isHalfValue(this.rating);
  }

  isHalfValue(value: number): boolean {
    return value % 1 !== 0;
  }
}
