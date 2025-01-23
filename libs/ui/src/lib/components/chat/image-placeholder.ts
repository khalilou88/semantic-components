import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ImagePlaceholderService } from './image-placeholder.service';

@Component({
  selector: 'img[sc-image-placeholder]',
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[src]': 'placeholderSrc()',
    '[width]': 'width()',
    '[height]': 'height()',
    '[alt]': 'alt()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScImagePlaceholder {
  private readonly placeholderService = inject(ImagePlaceholderService);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('object-cover', this.classInput()));

  readonly width = input(300);
  readonly height = input(200);
  readonly alt = input('Placeholder');

  //TODO use alt instead of text
  readonly text = input('');

  protected readonly placeholderSrc = computed(() => {
    return this.placeholderService.generatePlaceholder(this.width(), this.height(), this.text());
  });
}
