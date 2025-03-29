import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCircleIcon } from '@semantic-icons/lucide-icons';

import { ScRadioGroup } from './radio-group';

@Component({
  selector: 'sc-radio-item2',
  imports: [SiCircleIcon],
  template: `
    <div class="grid grid-cols-[1fr]">
      <input
        [id]="id()"
        [class]="inputClass()"
        [disabled]="disabled()"
        [name]="name()"
        (click)="select()"
        type="radio"
      />

      @if (checked() === true) {
        <span [class]="svgWrapperClass()">
          <svg [class]="svgClass()" si-circle-icon></svg>
        </span>
      }
    </div>

    <label [for]="id()" sc-label><ng-content /></label>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioItem2 {
  protected readonly id = signal<string>(inject(_IdGenerator).getId('sc-radio-item-'));

  private readonly scRadioGroup = inject(ScRadioGroup, { host: true });

  protected readonly name = computed(() => {
    return this.scRadioGroup.name();
  });

  readonly value = input.required<string>();

  protected readonly checked = computed(() => {
    return this.value() === this.scRadioGroup.value();
  });

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly disabled = computed(() => this.disabledInput() || this.scRadioGroup.disabled());

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('flex items-center space-x-2', this.classInput()));

  readonly inputClassInput = input<string>('');
  protected readonly inputClass = computed(() =>
    cn(
      'row-start-1 col-start-1',
      'appearance-none aspect-square h-4 w-4 rounded-full cursor-pointer border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.inputClassInput(),
    ),
  );

  protected readonly svgWrapperClass = input<string>(
    'row-start-1 col-start-1 h-4 w-4 flex items-center justify-center pointer-events-none',
  );

  readonly svgClassInput = input<string>('');
  protected readonly svgClass = computed(() =>
    cn('h-2.5 w-2.5 fill-primary text-primary pointer-events-none', this.svgClassInput()),
  );

  protected select() {
    if (this.disabled()) {
      return;
    }

    this.scRadioGroup.setValue(this.value());
  }
}
