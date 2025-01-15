import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-progress',
  imports: [],
  template: `
    <div [class]="class2()" [style.transform]="transform()"></div>
  `,
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',
    // Sets the minimum and maximum values for the progressbar role.
    '[attr.aria-valuemin]': 'min()',
    '[attr.aria-valuemax]': 'max()',
    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value()',
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScProgress {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('block relative h-4 w-full overflow-hidden rounded-full bg-secondary', this.classInput()),
  );

  readonly classInput2 = input<string>('', {
    alias: 'class2',
  });

  protected readonly class2 = computed(() =>
    cn('size-full flex-1 bg-primary transition-all', this.classInput2()),
  );

  /** Current value of the progressbar. */
  readonly value = input<number>(0);

  //TODO maybe name shoould be aria-valuemin
  readonly min = input<string | number>(0);
  //TODO maybe name shoould be aria-valuemax
  readonly max = input<string | number>(100);

  protected readonly transform = computed(() => {
    return `translateX(-${+this.max() - this.value()}%)`;
  });
}
