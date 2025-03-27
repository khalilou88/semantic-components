import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CardDemoSection } from './card-demo-section';

@Component({
  selector: 'app-card-page',
  imports: [CardDemoSection],
  template: `
    <app-card-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardPage {}
