import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScInput } from '../input';
import { ScLabel } from '../label';
import { ScImage } from './image';

@Component({
  selector: 'sc-file-upload',
  imports: [ScLabel, ScInput, ScImage],
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label sc-label for="picture">Picture</label>
      <input id="picture" sc-input type="file" onChange="handleFileChange()" />
      @if (selectedFile()) {
        <div class="mt-2">
          <img
            class="rounded-md"
            [src]="selectedFile()"
            sc-image
            alt="Preview"
            width="500"
            height="500"
          />
        </div>
      }
    </div>
  `,
  host: {
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUpload {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('', this.class()));

  selectedFile = signal<unknown>(undefined);

  handleFileChange = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.selectedFile.set(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
}
