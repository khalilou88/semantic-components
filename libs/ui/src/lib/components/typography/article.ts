import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

export const scArticleClasses = signal('prose prose-sm sm:prose lg:prose-lg xl:prose-2xl');

@Component({
  selector: 'sc-article',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScArticle {
  class = input<string>('');

  classes = computed(() => cn(scArticleClasses(), this.class()));
}
