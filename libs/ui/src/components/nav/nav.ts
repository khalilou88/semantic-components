import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nav[sc-nav]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-nav]': 'true',
  },
  styles: `
    .sc-nav {
      @apply relative z-10 flex max-w-max flex-1 items-center justify-center;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNav {}
