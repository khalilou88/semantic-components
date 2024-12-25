import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';

import { DataService } from './data-service';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/svg+xml'];

@Component({
  selector: 'sc-simple-dnd-upload-files',
  imports: [],
  template: `
    <div class="flex flex-col items-center px-6 pt-[100px] bg-gray-50 h-lvh w-lvw">
      <h1 class="leading-none text-4xl font-bold mb-[50px]">Drag and Drop Files Upload</h1>

      <div class="flex items-center content-center min-h-[350px] gap-x-6">
        <!-- Start Drop Zone -->
        <div
          class="relative flex flex-col outline-gray-500 outline-2 -outline-offset-4 outline-dashed w-[350px] h-[350px] rounded-2xl items-center justify-center"
        >
          <input
            class="absolute w-full h-full cursor-pointer opacity-0 top-0 left-0"
            #fileInput
            [accept]="allowedFileTypes"
            (change)="handleChange($event)"
            type="file"
          />

          <span class="mb-6">
            <svg
              class="w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>
          </span>

          <p class="text-center text-base max-w-[90%]">
            Drag and drop
            <br />
            file here to upload.
            <br />
            (PNG, JPG, SVG)
          </p>

          <button
            class="z-10 mt-6 text-green-50 px-6 py-3 bg-green-500 rounded-lg font-medium text-base hover:bg-green-600 ease-in-out"
            (click)="fileInput.click()"
            type="button"
          >
            Browse File
          </button>
        </div>
        <!-- End Drop Zone -->

        <!-- Start Preview Image -->
        @if (fileUrl()) {
          <div
            class="flex flex-col justify-end border w-[350px] h-[350px] rounded-2xl items-center relative bg-cover bg-center overflow-hidden bg-gray-300"
          >
            <img [src]="fileUrl()" />
            <div class="flex flex-col w-full p-4 bg-white">
              <p class="mb-6">{{ file()?.name }}</p>

              <div class="flex gap-3 justify-start">
                @if (status() === 'success') {
                  <button
                    class="text-sm font-medium w-[50%] border border-blue-500 px-4 py-3 bg-blue-500 text-blue-50 rounded-lg hover:bg-blue-600 ease-in-out disabled:bg-gray-300 disabled:border-gray-300"
                    [disabled]="status() === 'uploading'"
                    (click)="uploadFile()"
                    type="button"
                  >
                    {{ status() === 'uploading' ? 'UPLOADING...' : 'UPLOAD' }}
                  </button>
                }

                <button
                  class="text-sm font-medium w-[50%] border border-red-500 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500 hover:text-white ease-in-out"
                  [disabled]="status() === 'uploading'"
                  (click)="removeFile()"
                  type="button"
                >
                  REMOVE
                </button>

                @if (status() === 'uploading') {
                  <button
                    class="text-sm font-medium w-[50%] border border-red-500 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500 hover:text-white ease-in-out"
                    type="button"
                  >
                    Cancel
                  </button>
                }
              </div>
            </div>
          </div>
        }

        <!-- End Preview Image -->
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSimpleDndUploadFiles {
  file = signal<File | null | undefined>(undefined);
  fileUrl = computed<string | null | undefined>(() => {
    const file = this.file();
    if (file) {
      return URL.createObjectURL(file);
    }

    // return null or undefined
    return file;
  });

  fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');

  allowedFileTypes = ALLOWED_FILE_TYPES;

  status = signal<'init' | 'uploading' | 'success' | 'error'>('init');
  uploadProgress = signal(0);

  handleChange(event: any) {
    const file = event.target.files[0] as File;

    if (this.allowedFileTypes.indexOf(file?.type) === -1) {
      alert('File type is not allowed.');
      this.removeFile();
      return;
    }

    this.file.set(file);
  }

  removeFile() {
    this.fileInput().nativeElement.value = '';
    this.file.set(null);
  }

  dataService = inject(DataService);

  uploadFile(): void {
    const file = this.file();

    if (!file) {
      //TODO add message error
      return;
    }

    this.status.set('uploading');

    const formData = new FormData();
    formData.append('file', file);

    this.dataService.uploadFile(formData).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total) {
          this.uploadProgress.set(Math.round((100 * event.loaded) / event.total));
        } else {
          console.warn('event.total is undefined');
        }
      } else if (event instanceof HttpResponse) {
        this.uploadProgress.set(100);
        this.status.set('success');
      }
    });
  }
}
