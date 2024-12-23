import { FocusOrigin, FocusableOption, Highlightable } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
  model,
  signal,
} from '@angular/core';

@Component({
  selector: 'sc-time-option',
  imports: [],
  template: `
    <p>time-option works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimeOption implements Highlightable {
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

  id = '';

  value = model<string>();
}
