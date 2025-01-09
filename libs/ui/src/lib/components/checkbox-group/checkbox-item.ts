import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  linkedSignal,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCheckIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-checkbox-item',
  imports: [SiCheckIcon],
  template: `
    <div class="flex flex-row items-start space-x-3 space-y-0">
      <label
        class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
        [for]="id()"
      >
        {{ label() }}
      </label>

      <button
        class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        [id]="id()"
        [attr.data-state]="state()"
        type="button"
        role="checkbox"
        aria-checked="true"
        value="on"
        aria-describedby=":rce:-form-item-description"
        aria-invalid="false"
      >
        <span
          class="flex items-center justify-center text-current pointer-events-none"
          [attr.data-state]="state()"
        >
          <svg class="h-4 w-4" si-check-icon></svg>
        </span>
      </button>
      <input
        aria-hidden="true"
        tabindex="-1"
        type="checkbox"
        value="on"
        checked=""
        style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
      />
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [],
})
export class ScCheckboxItem {
  protected readonly id = signal<string>(inject(_IdGenerator).getId('sc-checkbox-item-'));

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  readonly value = input.required<string>();
  readonly label = input.required<string>();

  readonly checkedInput = input<boolean, unknown>(false, {
    alias: 'checked',
    transform: booleanAttribute,
  });
  protected readonly checked = linkedSignal(() => this.checkedInput());

  protected readonly state = computed<'checked' | 'unchecked'>(() => {
    if (this.checked()) {
      return 'checked';
    }

    return 'unchecked';
  });
}
