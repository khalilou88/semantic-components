import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'img[sc-avatar-image]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(load)': 'handleLoad()',
    '(error)': 'handleError()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAvatarImage {
  class = input<string>('');

  classes = computed(() => cn('aspect-square h-full w-full', this.class()));

  private readonly _loaded = signal(false);

  handleError() {
    this._loaded.set(false);
  }

  handleLoad() {
    this._loaded.set(true);
  }

  public canShow = computed(() => this._loaded());
}
