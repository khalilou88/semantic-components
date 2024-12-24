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
  output,
  signal,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-time-option',
  imports: [SvgCheckIcon],
  template: `
    @if (_selected()) {
      <svg-check-icon class="absolute left-2 flex size-4 items-center justify-center" />
    }

    <ng-content />
  `,
  host: {
    '[id]': 'id()',
    '[class]': '_class()',
    '[attr.data-disabled]': '_disabled()',
    '(mouseover)': 'setActiveStyles()',
    '(mouseleave)': 'setInactiveStyles()',
    '(click)': 'onClick()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimeOption implements Highlightable {
  /** The unique ID of the option. */
  id = signal<string>(inject(_IdGenerator).getId('sc-time-option-'));

  class = input<string>('');

  _class = computed(() =>
    cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      this._active() && 'bg-accent text-accent-foreground',

      this.class(),
    ),
  );

  _active = signal(false);
  _selected = signal(false);

  readonly _disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });

  readonly _disabled = computed(() => this._disabledByInput() || booleanAttribute(this.disabled));

  value = input<string>();

  setActiveStyles(): void {
    this._active.set(true);
  }

  setInactiveStyles(): void {
    this._active.set(false);
  }

  disabled: boolean | undefined;

  getLabel?(): string {
    return this.value() ?? '';
  }

  private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Gets the host DOM element. */
  _getHostElement(): HTMLElement {
    return this._element.nativeElement;
  }

  /** Selects the option. */
  select(): void {
    if (!this._selected()) {
      this._selected.set(true);
    }
  }

  /** Deselects the option. */
  deselect(): void {
    if (this._selected()) {
      this._selected.set(false);
    }
  }

  onClick() {
    if (this._selected()) {
      this._selected.set(false);
    } else {
      this.selected.emit(this.value());
      this._selected.set(true);
    }
  }

  selected = output<string | undefined>();
}
