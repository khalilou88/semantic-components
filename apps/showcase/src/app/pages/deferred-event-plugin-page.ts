import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-deferred-event-plugin-page',
  imports: [ScButton],
  template: `
    <header>Debounced Listener with EventManagerPlugin</header>

    <p>
      <code>(click.debounce.300)</code>
      as a listener
    </p>
    <p>
      <button (click.debounce.300)="click()" sc-button>Debounced click</button>
    </p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferredEventPluginPage {
  click() {
    console.log('Im debounced =)');
  }
}
