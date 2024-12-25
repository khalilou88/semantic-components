import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

import { SvgXIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScProgress } from '../progress';
import { ScFilePreview } from './file-preview';

@Component({
  selector: 'sc-file-card',
  imports: [SvgXIcon, ScButton, ScFilePreview, ScProgress],
  template: `
    <div class="relative flex items-center gap-2.5">
      <div class="flex flex-1 gap-2.5">
        @if (preview()) {
          <sc-file-preview file="file" />
        }

        <div class="flex w-full flex-col gap-2">
          <div class="flex flex-col gap-px">
            <p class="line-clamp-1 text-sm font-medium text-foreground/80">
              {{ file().name }}
            </p>
            <p class="text-xs text-muted-foreground">
              {{ formatBytes(file().size) }}
            </p>
          </div>

          @if (progress()) {
            <sc-progress [value]="progress()" />
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
          <svg-x-icon class="size-4" aria-hidden="true" />
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
  file = input.required<File>();
  progress = input.required<number>();
  preview = input.required<boolean>();
  removed = output<number>();
  remove() {
    this.removed.emit(this.index());
  }

  //TODO
  formatBytes(a: any) {
    return a;
  }
}
