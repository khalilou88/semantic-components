import { CdkMenuBar } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-menubar',
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
  hostDirectives: [CdkMenuBar],
})
export class ScMenubar {
  class = input<string>('');

  classes = computed(() =>
    cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', this.class()),
  );
}
