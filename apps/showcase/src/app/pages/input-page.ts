import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  effect,
  signal,
} from '@angular/core';

import { ScButton, ScPlainInput } from '@semantic-components/ui';

@Component({
  selector: 'app-input-page',
  imports: [ScPlainInput, ScButton],
  template: `
    <div class="m-10">
      <p>inputs</p>

      <br />
      <br />

      <!-- Search input -->
      <input
        class="grow rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        [(value)]="search"
        (keydown.escape)="search.set('')"
        sc-plain-input
      />
      <br />
      <br />

      search: {{ search() }}
      <br />
      <br />

      <button (click)="reset()" sc-button>Reset</button>
      <br />
      <br />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputPage {
  protected readonly search = signal('test');

  reset() {
    this.search.set('');
  }

  constructor() {
    effect(() => {
      console.log(this.search());
    });
  }
}
