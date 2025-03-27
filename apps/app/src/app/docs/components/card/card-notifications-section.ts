import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { CardNotifications } from './card-notifications';

@Component({
  selector: 'app-card-notifications-section',
  imports: [CardNotifications],
  template: `
    <app-card-notifications />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardNotificationsSection {}
