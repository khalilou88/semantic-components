import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'div[sc-card]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-card]': 'true',
  },
  styles: `
    .sc-card {
      @apply rounded-lg border bg-card text-card-foreground shadow-sm;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCard {}
