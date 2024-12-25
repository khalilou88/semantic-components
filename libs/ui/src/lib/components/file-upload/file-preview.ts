import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { SvgFileTextIcon } from '@semantic-icons/lucide-icons';

import { ScFile } from './file';

@Component({
  selector: 'sc-file-preview',
  imports: [SvgFileTextIcon],
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
      <svg-file-text-icon class="size-10 text-muted-foreground" aria-hidden="true" />
    }
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFilePreview {
  file = input.required<ScFile>();
}
