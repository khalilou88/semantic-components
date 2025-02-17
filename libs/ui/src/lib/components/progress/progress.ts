import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  numberAttribute,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-progress',
  imports: [],
  template: `
    <div [style.transform]="transform()" data-slot="indicator"></div>
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
    cn(
      'block relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      '[&>[data-slot=indicator]]:size-full [&>[data-slot=indicator]]:flex-1 [&>[data-slot=indicator]]:bg-primary [&>[data-slot=indicator]]:transition-all',
      this.mode() === 'indeterminate' &&
        '[&>[data-slot=indicator]]:animate-progress [&>[data-slot=indicator]]:origin-left',
      this.classInput(),
    ),
  );

  /** Current value of the progressbar. */
  readonly value = input<number>(0);

  //https://github.com/shadcn-ui/ui/issues/700
  readonly mode = input<'determinate' | 'indeterminate'>('determinate');

  //TODO maybe name shoould be aria-valuemin
  readonly min = input<number, unknown>(0, {
    transform: numberAttribute,
  });

  //TODO maybe name shoould be aria-valuemax
  readonly max = input<number, unknown>(100, {
    transform: numberAttribute,
  });

  protected readonly transform = computed(() => {
    return `translateX(${((this.value() - this.min()) / (this.max() - this.min())) * 100 - 100}%)`;
  });
}
