import { Highlightable } from '@angular/cdk/a11y';
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
import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-option',
  imports: [SvgCheckIcon],
  template: `
    @if (isSelected()) {
      <svg-check-icon class="absolute left-2 flex size-4 items-center justify-center" />
    }

    <span #label>
      <ng-content />
    </span>
  `,
  host: {
    '[class]': 'class()',
    '[attr.data-disabled]': '_disabled()',
    '[attr.data-active]': 'active()',
    '(click)': 'select()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption implements Highlightable {
  private readonly state = inject(ScSelectState);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() =>
    cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      this.classInput(),
    ),
  );

  isSelected = computed(() => this.value() === this.state.selectedValue());

  value = input.required<unknown>();

  labelEl = viewChild.required<ElementRef<HTMLSpanElement>>('label');

  label = computed(() => {
    return this.labelEl().nativeElement.textContent?.trim() ?? '';
  });

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Gets the host DOM element. */
  getHostElement(): HTMLElement {
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

  readonly disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  readonly _disabled = computed(
    () => this.disabledByInput() || this.disabled || this.state.disabled(),
  );

  select() {
    if (this._disabled()) {
      return;
    }

    this.state.selectedValue.set(this.value());
  }
}
