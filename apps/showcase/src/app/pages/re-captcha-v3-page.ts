import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScTab, ScTabContent, ScTabLabel, ScTabs } from '@semantic-components/experimental';
import { ScScoreReCaptcha } from '@semantic-components/re-captcha';
import { ScButton, ScCard, ScCardContent, ScHeading } from '@semantic-components/ui';

@Component({
  selector: 'app-re-captcha-page',
  imports: [
    ReactiveFormsModule,
    ScButton,
    ScButton,
    ScTabs,
    ScTab,
    ScTabLabel,
    ScTabContent,
    ScCard,
    ScHeading,
    ScCardContent,
  ],
  template: `
    <section class="my-10" id="button-with-loading-state">
      <h3 class="mb-2" sc-heading level="3">Score reCAPTCHA V3</h3>

      <sc-tabs class="w-[400px]" tabsHeaderClass="grid w-full grid-cols-2">
        <sc-tab>
          <sc-tab-label>Preview</sc-tab-label>
          <sc-tab-content>
            <div class="overflow-auto" sc-card>
              <div class="m-10 flex gap-2 p-0 items-center justify-center" sc-card-content>
                <button (click)="executeReCaptcha()" sc-button>Test captcha</button>
              </div>
            </div>
          </sc-tab-content>
        </sc-tab>

        <sc-tab>
          <sc-tab-label>Code</sc-tab-label>
          <sc-tab-content>
            <div class="overflow-auto" sc-card>
              <div class="m-10 flex gap-2 p-0" sc-card-content>
                <p>Coming soon</p>
              </div>
            </div>
          </sc-tab-content>
        </sc-tab>
      </sc-tabs>
    </section>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReCaptchaV3Page {
  siteKey = '6LcsDrAqAAAAAHzJ5RdR31XmRQhuPaFofY7jhIZZ';
  private readonly scReCaptcha = inject(ScScoreReCaptcha);

  reCaptchaV2Form = new FormGroup({
    captcha: new FormControl(''),
  });

  async executeReCaptcha() {
    const token = await this.scReCaptcha.execute('submit');
    console.log('Token:', token);
  }

  myCallback = (token: string) => {
    console.log('Callback function:', token);
  };

  class = signal<string>('block w-full');

  importCodeSnippet = `npm install @semantic-components/re-captcha`;
}
