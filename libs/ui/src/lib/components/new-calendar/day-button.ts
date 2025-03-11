import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  effect,
  inject,
  input,
} from '@angular/core';

import { ScButtonBase } from '../button';

@Component({
  selector: 'button[sc-day-button]',
  imports: [],
  template: `
    <ng-content />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDayButton extends ScButtonBase {
  private readonly host = inject(ElementRef);

  readonly isFocused = input.required<boolean>();

  constructor() {
    super();
    effect(() => {
      if (this.isFocused()) {
        this.host.nativeElement.focus();
      }
    });
  }
}
