import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'div[sc-aspect-ratio]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAspectRatio {
  readonly ratio = input<'square' | 'video' | 'portrait' | 'widescreen' | 'ultra-wide'>('video');
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('relative w-full', this.ratioClass(), '', this.classInput()),
  );

  private readonly ratioClass = computed(() => {
    switch (this.ratio()) {
      case 'square':
        return 'aspect-square'; // 1:1
      case 'video':
        return 'aspect-video'; // 16:9
      case 'portrait':
        return 'aspect-[3/4]'; // 3:4
      case 'widescreen':
        return 'aspect-[21/9]'; // 21:9
      case 'ultra-wide':
        return 'aspect-[32/9]'; // 32:9
      default:
        return 'aspect-video';
    }
  });
}
