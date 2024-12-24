import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-editor-toolbar',
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
export class ScEditorToolbar {
  class = input<string>('');

  //TODO change styles to fit shadcn
  _class = computed(() => cn('block border-b px-3 py-1 dark:border-gray-600', this.class()));
}
