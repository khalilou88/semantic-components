import { HttpEventType, HttpResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';

import { DataService } from '@semantic-components/supabase';
import { cn } from '@semantic-components/utils';
import { SvgUploadIcon } from '@semantic-icons/lucide-icons';
import { catchError, throwError } from 'rxjs';

import { ScAspectRatio } from '../aspect-ratio';
import { ScButton } from '../button';
import { ScProgress } from '../progress';
import { ScDropZone } from './drop-zone';
import { formatBytes } from './utils';

@Component({
  selector: 'sc-single-file-uploader',
  imports: [ScProgress, SvgUploadIcon, ScDropZone, ScButton, ScAspectRatio],
  template: `
    @if (!fileUrl()) {
      <!-- Dropzone -->
      <div #scDropZone="scDropZone" scDropZone>
        <input
          class="absolute left-0 top-0 size-full cursor-pointer opacity-0"
          (change)="handleFileChange($event)"
          accept="image/*"
          tabindex="-1"
          type="file"
        />

        @if (scDropZone.isDragActive()) {
          <div class="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div class="rounded-full border border-dashed p-3">
              <svg-upload-icon class="size-7 text-muted-foreground" aria-hidden="true" />
            </div>
            <p class="font-medium text-muted-foreground">Drop the files here</p>
          </div>
        } @else {
          <div class="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div class="rounded-full border border-dashed p-3">
              <svg-upload-icon class="size-7 text-muted-foreground" aria-hidden="true" />
            </div>
            <div class="flex flex-col gap-px">
              <p class="font-medium text-muted-foreground">
                Drag 'n' drop your files here, or click to select files
              </p>
              <p class="text-sm text-muted-foreground/70">You can upload {{ uploadInfo() }}</p>
            </div>
          </div>
        }
      </div>
      <!-- fin Dropzone -->
    }

    <!-- Start Preview Image -->
    @if (fileUrl()) {
      <sc-aspect-ratio [src]="fileUrl() ?? ''" ratio="16 / 9" alt="" />

      <p>{{ file()?.name }}</p>

      <sc-progress [value]="uploadProgress()" />

      <div class="flex justify-start gap-3">
        <button
          [disabled]="status() === 'uploading'"
          (click)="removeFile()"
          sc-button
          variant="destructive"
          type="button"
        >
          Remove
        </button>

        @if (status() === 'init' || status() === 'error') {
          <button
            [disabled]="status() === 'uploading'"
            (click)="uploadFile()"
            sc-button
            variant="primary"
            type="button"
          >
            Upload
          </button>
        }

        @if (status() === 'uploading') {
          <button sc-button variant="secondary" type="button">Cancel</button>
        }
      </div>
    }
    <!-- End Preview Image -->
  `,
  host: {
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSingleFileUploader {
  dataService = inject(DataService);

  readonly class = input<string>('');

  protected readonly _class = computed(() =>
    cn('relative flex flex-col gap-6 overflow-hidden', this.class()),
  );

  file = signal<File | null | undefined>(undefined);
  fileUrl = computed<string | null | undefined>(() => {
    const file = this.file();
    if (file) {
      return URL.createObjectURL(file);
    }

    // return null or undefined
    return file;
  });

  status = linkedSignal<File | null | undefined, 'init' | 'uploading' | 'success' | 'error'>({
    source: this.file,
    computation: () => {
      return 'init';
    },
  });

  uploadProgress = signal(0);

  maxSize = input<number>(1024 * 1024 * 2);

  uploadInfo() {
    return ` a file with ${formatBytes(this.maxSize())}`;
  }

  handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];

    this.file.set(file);
  }

  removeFile() {
    this.file.set(null);
  }

  uploadFile(): void {
    const file = this.file();

    if (!file) {
      //TODO add message error
      return;
    }

    this.status.set('uploading');

    this.dataService
      .uploadFile(file)

      .pipe(
        catchError((error) => {
          this.status.set('error');
          // Quality control catches the problem
          console.error('Delivery problem:', error);
          // Send an apology note or fix the issue
          return throwError(() => new Error('Oops! Something went wrong. Please try again later.'));
        }),
      )
      .subscribe((event) => {
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
