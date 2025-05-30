import { Highlightable, _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SiCheckIcon } from '@semantic-icons/lucide-icons';

import { ScSelect } from './select';

@Component({
  selector: 'sc-option',
  imports: [SiCheckIcon],
  template: `
    @if (isSelected()) {
      <svg class="absolute left-2 flex size-4 items-center justify-center" si-check-icon></svg>
    }

    <span #label>
      <ng-content />
    </span>
  `,
  host: {
    '[id]': 'id()',
    '[class]': 'class()',
    '[attr.data-disabled]': '_disabled()',
    '[attr.data-active]': 'active()',
    '(mouseover)': 'setActiveStyles()',
    '(mouseleave)': 'setInactiveStyles()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption implements Highlightable {
  readonly id = signal<string>(inject(_IdGenerator).getId('sc-option-'));

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[active=true]:bg-accent data-[active=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      this.classInput(),
    ),
  );

  private readonly scSelect = inject(ScSelect);

  protected isSelected = computed(() => this.value() === this.scSelect.value());

  readonly value = input.required<unknown>();

  private readonly labelEl = viewChild.required<ElementRef<HTMLSpanElement>>('label');

  readonly label = computed(() => {
    return this.labelEl().nativeElement.textContent?.trim() ?? '';
  });

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  get nativeElement() {
    return this.element.nativeElement;
  }

  readonly active = signal(false);

  setActiveStyles(): void {
    this.active.set(true);
  }

  setInactiveStyles(): void {
    this.active.set(false);
  }

  disabled: boolean | undefined;

  getLabel(): string {
    return this.label();
  }

  readonly disabledInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  protected readonly _disabled = computed(
    () => this.disabledInput() || this.disabled || this.scSelect.disabled(),
  );

  protected toggle() {
    if (this.isSelected()) {
      this.deselect();
    } else {
      this.select();
    }
  }

  private select() {
    if (this._disabled()) {
      return;
    }

    this.scSelect.setValue(this.value());
  }

  private deselect() {
    if (this._disabled()) {
      return;
    }

    this.scSelect.setValue(null);
  }
}
