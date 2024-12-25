import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { SvgUploadIcon } from '@semantic-icons/lucide-icons';

import { ScDropZone } from './drop-zone';
import { ScFile } from './file';
import { ScFileCard } from './file-card';
import { formatBytes } from './utils';

@Component({
  selector: 'sc-file-uploader',
  imports: [SvgUploadIcon, ScFileCard, ScDropZone],
  template: `
    <div class="relative flex flex-col gap-6 overflow-hidden">
      <!-- Dropzone -->
      <div #scDropZone="scDropZone" scDropZone>
        <input
          class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          [multiple]="multiple()"
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

      <div class="h-fit w-full px-3">
        <div class="flex max-h-48 flex-col gap-4">
          @for (file of files(); track $index; let index = $index) {
            <sc-file-card [file]="file" [index]="index" (removed)="onRemove($event)" />
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploader {
  maxSize = input<number>(1024 * 1024 * 2);
  maxFiles = input<number>(1);
  files = signal<ScFile[]>([]);

  multiple = computed(() => this.maxFiles() > 1);

  uploadInfo() {
    return this.maxFiles() > 1
      ? ` ${this.maxFiles()} files (up to ${formatBytes(this.maxSize())} each)`
      : ` a file with ${formatBytes(this.maxSize())}`;
  }

  onRemove(index: number) {
    if (!this.files) return;
    this.files.update((files) => files.filter((_, i) => i !== index));
  }

  handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    const acceptedFiles = Array.from(files);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const scFile: ScFile = { file: file, progress: 33, preview: reader.result };

        this.files.update((files) => [...files, scFile]);
      };
      reader.readAsDataURL(file);
    });
  }
}
