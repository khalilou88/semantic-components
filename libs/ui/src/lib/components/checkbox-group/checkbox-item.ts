import { _IdGenerator } from '@angular/cdk/a11y';
import { CdkOption } from '@angular/cdk/listbox';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
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
    <input
      [checked]="checked()"
      aria-hidden="true"
      tabindex="-1"
      type="checkbox"
      value="on"
      style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
    />
    <label
      class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      [for]="id()"
    >
      {{ label() }}
    </label>
    <button
      class="peer size-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      [id]="id()"
      [attr.data-state]="state()"
      [attr.aria-checked]="state() === 'checked' ? 'true' : 'false'"
      type="button"
      role="checkbox"
      value="on"
      aria-describedby=":rce:-form-item-description"
      aria-invalid="false"
    >
      @if (checked()) {
        <span
          class="pointer-events-none flex items-center justify-center text-current"
          [attr.data-state]="state()"
        >
          <svg class="size-4" si-check-icon></svg>
        </span>
      }
    </button>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: CdkOption,
      inputs: ['cdkOption: value', 'cdkOptionDisabled: disabled'],
    },
  ],
})
export class ScCheckboxItem implements OnInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected readonly id = signal<string>(inject(_IdGenerator).getId('sc-checkbox-item-'));

  private readonly cdkOption = inject(CdkOption);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn('flex flex-row items-start space-x-3 space-y-0', this.classInput()),
  );

  readonly value = input.required<string>();
  readonly label = input.required<string>();

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  protected readonly disabled = linkedSignal(() => this.disabledInput());

  protected readonly checked = linkedSignal(() => this.cdkOption.isSelected());

  protected readonly state = computed<'checked' | 'unchecked'>(() => {
    if (this.checked()) {
      return 'checked';
    }

    return 'unchecked';
  });

  ngOnInit() {
    this.cdkOption._clicked.subscribe(() => {
      this.changeDetectorRef.markForCheck();
      this.checked.set(this.cdkOption.isSelected());
    });
  }
}
