import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  computed,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-tab',
  imports: [],
  template: `
    <ng-template #label>
      <ng-content select="sc-tab-label" />
    </ng-template>

    @if (active()) {
      <ng-content select="sc-tab-content" />
    }
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTab {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  active = signal<boolean>(false);

  label = viewChild.required<TemplateRef<unknown>>('label');
}
