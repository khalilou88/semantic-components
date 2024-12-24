import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-editor-group',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorGroup {
  class = input<string>('');

  //TODO change styles
  _class = computed(() => cn('flex flex-wrap items-center gap-1 py-1', this.class()));
}
