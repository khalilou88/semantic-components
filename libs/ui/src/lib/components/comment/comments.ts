import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ScComment } from './comment';
import { ScCommentModel, ScUserModel } from './comment-model';

@Component({
  selector: 'sc-comments',
  imports: [ReactiveFormsModule, ScComment],
  template: `
    <div class="mx-auto max-w-3xl p-4">
      <!-- New Comment Form -->
      <form class="mb-8" [formGroup]="commentForm" (ngSubmit)="onSubmit()">
        <div class="flex gap-4">
          <img class="size-10 rounded-full" [src]="currentUser().avatar" alt="User Avatar" />
          <div class="flex-1">
            <textarea
              class="h-24 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              formControlName="content"
              placeholder="Write a comment..."
            ></textarea>
            <div class="mt-2 flex justify-end">
              <button
                class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                [disabled]="!commentForm.valid"
                type="submit"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      <!-- Comments List -->
      <div class="space-y-6">
        @for (item of comments(); track $index) {
          <sc-comment [comment]="item" />
        }
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScComments {
  comments = input.required<ScCommentModel[]>();

  currentUser = input.required<ScUserModel>();

  commentForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.commentForm = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const newComment: ScCommentModel = {
        id: this.comments.length + 1,
        author: this.currentUser.name,
        avatar: this.currentUser().avatar,
        content: this.commentForm.value.content,
        timestamp: new Date(),
        likes: 0,
        replies: [],
      };

      this.comments().unshift(newComment);
      this.commentForm.reset();
    }
  }
}
