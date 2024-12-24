import { Highlightable, _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
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
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimeOption implements Highlightable {
  class = input<string>('');

  classes = computed(() => cn('block', this._active() && 'bg-red-500', this.class()));

  _active = signal(false);

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

  value = model<string>();

  _selected = false;

  _changeDetectorRef = inject(ChangeDetectorRef);

  /** Selects the option. */
  select(emitEvent = true): void {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
    }
  }

  /** Deselects the option. */
  deselect(emitEvent = true): void {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();

      // if (emitEvent) {
      //   this._emitSelectionChangeEvent();
      // }
    }
  }
}
