import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-with-text',
  imports: [ScLabel, ScTextarea],
  template: `
    <div class="grid w-full gap-1.5">
      <label sc-label for="message-2">Your Message</label>
      <textarea id="message-2" sc-textarea placeholder="Type your message here."></textarea>
      <p class="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
    </div>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaWithText {}
