import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'label[sc-label]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class.sc-label]': 'true',
  },
  styles: `
    .sc-label {
      @apply text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLabel {}
