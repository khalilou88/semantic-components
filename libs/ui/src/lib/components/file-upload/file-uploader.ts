import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SvgUploadIcon } from '@semantic-icons/lucide-icons';

import { ScFileCard } from './file-card';

@Component({
  selector: 'sc-file-uploader',
  imports: [SvgUploadIcon, ScFileCard],
  template: `
    <div class="relative flex flex-col gap-6 overflow-hidden">
      <!-- Dropzone -->
      <div [class]="_class()">
        <input (change)="handleFileChange($event)" type="file" />

        @if (isDragActive()) {
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
              <p class="text-sm text-muted-foreground/70">You can upload {{ f() }}</p>
            </div>
          </div>
        }
      </div>
      <!-- fin Dropzone -->

      <div class="h-fit w-full px-3">
        <div class="flex max-h-48 flex-col gap-4">
          @for (file of files; track $index) {
            <sc-file-card (onRemove)="onRemove($event)" file="file" />
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
  isDragActive = input(false);
  isDisabled = input(false);

  acceptedFiles = '';

  files = [];

  readonly class = input<string>('');

  protected readonly _class = computed(() =>
    cn(
      'group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25',
      'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.isDragActive() && 'border-muted-foreground/50',
      this.isDisabled() && 'pointer-events-none opacity-60',
      this.class(),
    ),
  );

  maxFileCount = 4;
  maxSize = 5;

  f() {
    return this.maxFileCount > 1
      ? ` ${this.maxFileCount} files (up to ${this.formatBytes(this.maxSize)} each)`
      : ` a file with ${this.formatBytes(this.maxSize)}`;
  }

  formatBytes(a: any) {
    return `${a} MB`;
  }

  handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    console.log(files);

    const acceptedFiles = Array.from(files);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  onRemove(index: Event) {
    if (!this.files) return;
    // const newFiles = this.files.filter((_, i) => i !== index);
    // setFiles(newFiles);
    // onValueChange?.(newFiles);
  }
}
