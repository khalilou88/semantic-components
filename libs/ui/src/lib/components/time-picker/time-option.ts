import { Highlightable, _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  model,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'sc-time-option',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[id]': 'id()',
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimeOption implements Highlightable {
  class = input<string>('');

  classes = computed(() =>
    cn('block', this._active() && 'bg-red-500', this._selected() && 'bg-green-500', this.class()),
  );

  _active = signal(false);
  _selected = signal(false);

  readonly _disabledByInput = input<boolean, unknown>(false, {
    alias: 'disabled',
    transform: booleanAttribute,
  });
  readonly _disabled = computed(() => this._disabledByInput() || booleanAttribute(this.disabled));

  value = model<string>();

  setActiveStyles(): void {
    this._active.set(true);
  }
  setInactiveStyles(): void {
    this._active.set(false);
  }
  disabled?: boolean | undefined;

  getLabel?(): string {
    return this.value() ?? '';
  }

  private _element = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Gets the host DOM element. */
  _getHostElement(): HTMLElement {
    return this._element.nativeElement;
  }

  /** The unique ID of the option. */
  id = signal<string>(inject(_IdGenerator).getId('sc-time-option-'));

  _changeDetectorRef = inject(ChangeDetectorRef);

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
}
