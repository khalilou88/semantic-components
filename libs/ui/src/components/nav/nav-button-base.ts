import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-nav-button-base',
  imports: [],
  template: ``,
  host: {
    '[class.sc-nav-button-base]': 'true',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavButtonBase {}
