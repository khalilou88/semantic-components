import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ul[sc-nav-list]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    dir: 'ltr',
    '[class.sc-nav-list]': 'true',
  },
  styles: `
    .sc-nav-list {
      @apply flex flex-1 list-none items-center justify-center space-x-1;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNavList {}
