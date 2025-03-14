import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScRating } from '@semantic-components/ui';

@Component({
  selector: 'app-rating-page',
  imports: [ScRating, CommonModule],
  template: `
    <div class="max-w-2xl mx-auto p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Star Rating Component with Half Stars</h2>

      <div class="bg-white shadow rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Interactive Rating</h3>
        <p class="text-gray-600 mb-4">
          Your rating:
          <span class="font-semibold">{{ userRating.toFixed(1) }}</span>
        </p>
        <p class="text-gray-500 text-sm mb-2">
          Click once for full star, click again for half star
        </p>
        <sc-rating
          [rating]="userRating"
          [interactive]="true"
          [showRatingValue]="true"
          [allowHalfStars]="true"
          (ratingChange)="onRatingChange($event)"
        ></sc-rating>
      </div>

      <div class="bg-white shadow rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-2">Display Only Ratings</h3>
        <div class="space-y-4">
          <div class="flex items-center" *ngFor="let item of presetRatings">
            <span class="w-20 text-gray-700">{{ item.label }}:</span>
            <sc-rating
              [rating]="item.value"
              [interactive]="false"
              [showRatingValue]="true"
            ></sc-rating>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RatingPage {
  userRating = 0;

  presetRatings = [
    { label: 'Perfect', value: 5 },
    { label: 'Great', value: 4.5 },
    { label: 'Good', value: 4 },
    { label: 'Average', value: 3.5 },
    { label: 'Poor', value: 2 },
  ];

  onRatingChange(rating: number) {
    this.userRating = rating;
    console.log('New rating:', rating);
  }
}
