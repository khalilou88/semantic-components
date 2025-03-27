import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CardDemoSection } from './card-demo-section';
import { CardNotificationsSection } from './card-notifications-section';

@Component({
  selector: 'app-card-page',
  imports: [CardDemoSection, CardNotificationsSection],
  template: `
    <app-card-demo-section />

    <app-card-notifications-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardPage {}
