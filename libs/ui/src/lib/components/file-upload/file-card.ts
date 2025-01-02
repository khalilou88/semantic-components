import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';

import { SiXIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScProgress } from '../progress';
import { ScFile } from './file';
import { ScFilePreview } from './file-preview';
import { formatBytes } from './utils';

@Component({
  selector: 'sc-file-card',
  imports: [SiXIcon, ScButton, ScFilePreview, ScProgress],
  template: `
    <div class="relative flex items-center gap-2.5">
      <div class="flex flex-1 gap-2.5">
        @if (file().preview) {
          <sc-file-preview [file]="file()" />
        }

        <div class="flex w-full flex-col gap-2">
          <div class="flex flex-col gap-px">
            <p class="line-clamp-1 text-sm font-medium text-foreground/80">
              {{ file().file.name }}
            </p>
            <p class="text-xs text-muted-foreground">
              {{ formatedSize() }}
            </p>
          </div>

          @let p = progress();
          @if (p) {
            <sc-progress [value]="p" />
          }
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button
          class="size-7"
          (click)="remove()"
          sc-button
          type="button"
          variant="outline"
          size="icon"
        >
          <svg class="size-4" si-x-icon aria-hidden="true"></svg>
          <span class="sr-only">Remove file</span>
        </button>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileCard {
  index = input.required<number>();
  file = input.required<ScFile>();
  progress = input<number | undefined>(undefined);
  removed = output<number>();
  formatedSize = computed(() => formatBytes(this.file().file.size));

  remove() {
    this.removed.emit(this.index());
  }
}
