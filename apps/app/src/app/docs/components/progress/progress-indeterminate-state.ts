import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-progress-indeterminate-state',
  imports: [ScProgress],
  template: `
    <sc-progress mode="indeterminate" />
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndeterminateState {}
