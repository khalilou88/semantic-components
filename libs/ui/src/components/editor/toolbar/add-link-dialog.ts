import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface LinkData {
  url: string | null | undefined;
}

@Component({
  selector: 'sc-add-link-dialog',
  imports: [ReactiveFormsModule],
  template: `
    <div
      class="z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      tabindex="-1"
    >
      <div class="relative max-h-full w-full max-w-md p-4">
        <!-- Modal content -->
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Insert Url</h3>
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
            <form class="space-y-4" [formGroup]="linkForm">
              <div>
                <label
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  for="url"
                >
                  Url
                </label>
                <input
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder:text-gray-400"
                  id="url"
                  type="url"
                  name="url"
                  formControlName="url"
                />
              </div>

              <button
                class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                (click)="
                  dialogRef.close({
                    url: url?.value,
                  })
                "
              >
                Add link
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
export class ScAddLinkDialog {
  dialogRef = inject<DialogRef<LinkData>>(DialogRef<LinkData>);

  linkForm = new FormGroup({
    url: new FormControl('https://flowbite.com', Validators.required),
  });

  get url() {
    return this.linkForm.get('url');
  }
}
