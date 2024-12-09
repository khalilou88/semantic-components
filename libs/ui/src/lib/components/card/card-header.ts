import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'div[sc-card-header]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-card-header]': 'true',
  },
  styles: `
    .sc-card-header {
      @apply flex flex-col space-y-1.5 p-6;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCardHeader {}
