import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  effect,
  signal,
} from '@angular/core';

import { ScPlainInput } from '@semantic-components/ui';

@Component({
  selector: 'app-input-page',
  imports: [ScPlainInput],
  template: `
    <div class="m-10">
      <p>inputs</p>

      <br />
      <br />

      <input
        class="grow rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        [(value)]="search"
        sc-plain-input
      />
      <br />
      <br />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPage {
  protected readonly search = signal('');

  constructor() {
    effect(() => {
      console.log(this.search());
    });
  }
}
