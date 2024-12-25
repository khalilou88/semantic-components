import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SvgFileTextIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-file-preview',
  imports: [SvgFileTextIcon],
  template: `
    @if (file.type.startsWith('image/')) {
      <img
        class="aspect-square shrink-0 rounded-md object-cover"
        [src]="file.preview"
        [alt]="file.name"
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
  file = { type: '', preview: '', name: '' };
}
