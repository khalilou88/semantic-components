import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SvgUploadIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-file-uploader',
  imports: [SvgUploadIcon],
  template: `
    <div class="relative flex flex-col gap-6 overflow-hidden">
      <!-- Dropzone -->
      <div class="_class()">
        <input />

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
                drop files here, or click to select files
              </p>
              <p class="text-sm text-muted-foreground/70">You can upload rrrrrrrr</p>
            </div>
          </div>
        }
      </div>
      <!-- fin Dropzone -->

      <div class="h-fit w-full px-3">
        <div class="flex max-h-48 flex-col gap-4">
          @for (item of files; track $index) {
            <div>File</div>
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
  files = [];

  isDragActive = signal(false);
  isDisabled = signal(false);

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
}
