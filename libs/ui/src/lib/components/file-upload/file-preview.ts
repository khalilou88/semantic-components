import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { SiFileTextIcon } from '@semantic-icons/lucide-icons';

import { ScFile } from './file';

@Component({
  selector: 'sc-file-preview',
  imports: [SiFileTextIcon],
  template: `
    @if (file().file.type.startsWith('image/')) {
      <img
        class="aspect-square shrink-0 rounded-md object-cover"
        [src]="file().preview"
        [alt]="file().file.name"
        width="48"
        height="48"
        loading="lazy"
      />
    } @else {
      <svg class="size-10 text-muted-foreground" si-file-text-icon aria-hidden="true"></svg>
    }
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFilePreview {
  file = input.required<ScFile>();
}
