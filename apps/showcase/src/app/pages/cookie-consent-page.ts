import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCookieConsent } from '@semantic-components/ui';

@Component({
  selector: 'app-cookie-consent-page',
  imports: [ScCookieConsent],
  template: `
    <sc-cookie-consent />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CookieConsentPage {}
