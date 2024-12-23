import { FocusOrigin, FocusableOption, Highlightable } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
  model,
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
  setActiveStyles(): void {
    throw new Error('Method not implemented.');
  }
  setInactiveStyles(): void {
    throw new Error('Method not implemented.');
  }
  disabled?: boolean | undefined;
  getLabel?(): string {
    throw new Error('Method not implemented.');
  }

  private _element = inject<ElementRef<HTMLElement>>(ElementRef);

  /** Gets the host DOM element. */
  _getHostElement(): HTMLElement {
    return this._element.nativeElement;
  }

  id = '';

  value = model<string>();
}
