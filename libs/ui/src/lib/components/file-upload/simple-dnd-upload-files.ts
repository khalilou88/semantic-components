import { NgStyle } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { DataService } from './data-service';

const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/svg+xml'];

@Component({
  selector: 'sc-simple-dnd-upload-files',
  imports: [NgStyle],
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
            (drop)="handleDrop($event)"
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
        @if (fileUrl && uploadFile) {
          <div
            class="flex flex-col justify-end border w-[350px] h-[350px] rounded-2xl items-center relative bg-cover bg-center overflow-hidden bg-gray-300"
            [ngStyle]="{ 'background-image': 'url(' + fileUrl + ')' }"
          >
            <div class="flex flex-col w-full p-4 bg-white">
              <p class="mb-6">{{ uploadFile.name }}</p>

              <div class="flex gap-3 justify-start">
                <button
                  class="text-sm font-medium w-[50%] border border-blue-500 px-4 py-3 bg-blue-500 text-blue-50 rounded-lg hover:bg-blue-600 ease-in-out disabled:bg-gray-300 disabled:border-gray-300"
                  [disabled]="isUploading"
                  (click)="handleUploadFile()"
                  type="button"
                >
                  {{ !isUploading ? 'UPLOAD' : 'UPLOADING...' }}
                </button>
                <button
                  class="text-sm font-medium w-[50%] border border-red-500 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500 hover:text-white ease-in-out"
                  [disabled]="isUploading"
                  (click)="handleRemovesFile()"
                  type="button"
                >
                  REMOVE
                </button>
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
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  allowedFileTypes = ALLOWED_FILE_TYPES;

  isUploading = false;
  fileUrl!: string | null;
  uploadFile!: File | null;

  handleChange(event: any) {
    console.log('handleChange');
    console.log(event);

    const file = event.target.files[0] as File;

    if (this.allowedFileTypes.indexOf(file?.type) === -1) {
      alert('File type is not allowed.');
      this.handleRemovesFile();
      return;
    }

    this.fileUrl = URL.createObjectURL(file);
    this.uploadFile = file;
  }

  handleDrop(event: any) {
    console.log('handleDrop');
    console.log(event);
  }

  handleRemovesFile() {
    if (this.fileInput.nativeElement) {
      this.fileInput.nativeElement.value = null;
    }

    this.uploadFile = null;
    this.fileUrl = null;
  }

  handleUploadFile() {
    this.isUploading = true;

    // your API service logic to upload file
  }

  dataService = inject(DataService);
  fileProgress = 0;
  fileInProgress = false;
  uploadSuccess = false;
  uploadFail = false;

  uploadFile2(file: File): void {
    const formData = new FormData();
    formData.append('key', file);

    this.dataService.uploadFile(formData).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total) {
            this.fileProgress = Math.round((100 * event.loaded) / event.total);
          } else {
            console.warn('event.total is undefined');
          }
        } else if (event instanceof HttpResponse) {
          this.fileProgress = 100;
          this.fileInProgress = false;
          this.uploadSuccess = true;
        }
      },
      // (err) => {
      //   console.log('Could not upload the file!');
      //   this.uploadFail = true;
      // },
    );
  }
}
