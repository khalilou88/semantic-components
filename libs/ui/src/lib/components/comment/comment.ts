import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { ScCommentModel } from './comment-model';

@Component({
  selector: 'sc-comment',
  imports: [DatePipe, NgFor, NgIf],
  template: `
    <div class="rounded-lg bg-white p-4 shadow-sm">
      <!-- Comment Header -->
      <div class="mb-3 flex items-center gap-3">
        <img class="size-8 rounded-full" [src]="comment().avatar" alt="Comment author avatar" />
        <div>
          <h4 class="font-medium text-gray-900">{{ comment().author }}</h4>
          <p class="text-sm text-gray-500">
            {{ comment().timestamp | date: 'MMM d, y, h:mm a' }}
          </p>
        </div>
      </div>

      <!-- Comment Content -->
      <p class="mb-3 text-gray-700">{{ comment().content }}</p>

      <!-- Comment Actions -->
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <button
          class="flex items-center gap-1 hover:text-blue-600"
          (click)="likeComment(comment())"
        >
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          {{ comment().likes }}
        </button>
        <button
          class="flex items-center gap-1 hover:text-blue-600"
          (click)="toggleReplyForm(comment())"
        >
          <svg
            class="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Reply
        </button>
      </div>

      <!-- Nested Replies -->
      <div class="ml-8 mt-4 space-y-4" *ngIf="comment().replies?.length">
        <div class="rounded-lg bg-gray-50 p-3" *ngFor="let reply of comment().replies">
          <div class="mb-2 flex items-center gap-3">
            <img class="size-6 rounded-full" [src]="reply.avatar" alt="Reply author avatar" />
            <div>
              <h5 class="font-medium text-gray-900">{{ reply.author }}</h5>
              <p class="text-xs text-gray-500">
                {{ reply.timestamp | date: 'MMM d, y, h:mm a' }}
              </p>
            </div>
          </div>
          <p class="text-sm text-gray-700">{{ reply.content }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScComment {
  comment = input.required<ScCommentModel>();

  likeComment(comment: ScCommentModel) {
    comment.likes++;
  }

  toggleReplyForm(comment: ScCommentModel) {
    // Implement reply form logic here
    console.log('Toggle reply form for comment:', comment.id);
  }
}
