import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface VideoData {
  url: string | null | undefined;
  width: number | null | undefined;
  height: number | null | undefined;
}

@Component({
  selector: 'sc-add-video-dialog',
  imports: [ReactiveFormsModule],
  template: `
    <div
      class="z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="relative max-h-full w-full max-w-md p-4">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Insert advanced video
            </h3>
            <button
              class="end-2.5 ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              (click)="dialogRef.close()"
              type="button"
            >
              <svg
                class="size-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <form class="space-y-4" [formGroup]="videoForm">
              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  for="URL"
                >
                  YouTube URL
                </label>
                <input
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                  id="URL"
                  type="url"
                  name="url"
                  formControlName="url"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    for="width"
                  >
                    Video width
                  </label>
                  <input
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    id="width"
                    type="number"
                    name="width"
                    formControlName="width"
                  />
                </div>
                <div>
                  <label
                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    for="height"
                  >
                    Video height
                  </label>
                  <input
                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                    id="height"
                    type="number"
                    name="height"
                    formControlName="height"
                  />
                </div>
              </div>
              <button
                class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                (click)="dialogRef.close(getVideoInfo())"
              >
                Add video
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVideoDialogComponent {
  dialogRef = inject<DialogRef<VideoData>>(DialogRef<VideoData>);

  videoForm = new FormGroup({
    url: new FormControl('https://www.youtube.com/watch?v=KaLxCiilHns', Validators.required),
    width: new FormControl(''),
    height: new FormControl(''),
  });

  get url() {
    return this.videoForm.get('url');
  }

  get width() {
    return this.videoForm.get('width');
  }

  get height() {
    return this.videoForm.get('height');
  }

  getVideoInfo() {
    return {
      url: this.url?.value,
      width: parseInt(this.width?.value ?? ''),
      height: parseInt(this.height?.value ?? ''),
    };
  }
}
