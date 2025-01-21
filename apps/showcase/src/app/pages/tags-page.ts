import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tags-page',
  imports: [NgFor, ReactiveFormsModule, NgIf],
  template: `
    <div class="w-full">
      <!-- Tags Input -->
      <div
        class="min-h-[45px] w-full rounded-lg border border-gray-300 p-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500"
        [class.border-red-500]="error"
      >
        <div class="flex flex-wrap gap-2">
          <!-- Existing Tags -->
          <span
            class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
            *ngFor="let tag of tags"
          >
            {{ tag }}
            <button
              class="hover:text-blue-600 focus:outline-none"
              (click)="removeTag(tag)"
              type="button"
              aria-label="Remove tag"
            >
              <svg
                class="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </span>

          <!-- Input Field -->
          <input
            class="min-w-[120px] grow bg-transparent outline-none"
            #tagInput
            [formControl]="tagControl"
            [placeholder]="tags.length === 0 ? placeholder : ''"
            (keyup.enter)="addTag()"
            (keyup.comma)="addTag()"
            (blur)="addTag()"
          />
        </div>
      </div>

      <!-- Error Message -->
      <div class="mt-1 text-sm text-red-500" *ngIf="error">
        {{ error }}
      </div>

      <!-- Helper Text -->
      <div class="mt-1 text-sm text-gray-500" *ngIf="helperText">
        {{ helperText }}
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TagsPage {
  @Input() tags: string[] = [];
  @Input() placeholder = 'Add tags...';
  @Input() helperText = 'Press enter or comma to add tags';
  @Input() maxTags = 10;
  @Input() minLength = 2;
  @Input() maxLength = 20;
  @Output() tagsChange = new EventEmitter<string[]>();

  tagControl = new FormControl('');
  error = '';

  addTag(): void {
    const tag = this.tagControl.value?.trim().toLowerCase();

    if (!tag) {
      this.tagControl.setValue('');
      return;
    }

    // Validation
    if (tag.length < this.minLength) {
      this.error = `Tag must be at least ${this.minLength} characters long`;
      return;
    }

    if (tag.length > this.maxLength) {
      this.error = `Tag must be less than ${this.maxLength} characters long`;
      return;
    }

    if (this.tags.length >= this.maxTags) {
      this.error = `Maximum ${this.maxTags} tags allowed`;
      return;
    }

    if (this.tags.includes(tag)) {
      this.error = 'Tag already exists';
      return;
    }

    // Add tag
    this.error = '';
    this.tags = [...this.tags, tag];
    this.tagsChange.emit(this.tags);
    this.tagControl.setValue('');
  }

  removeTag(tagToRemove: string): void {
    this.tags = this.tags.filter((tag) => tag !== tagToRemove);
    this.tagsChange.emit(this.tags);
    this.error = '';
  }
}
