import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-with-label',
  imports: [ScLabel, ScTextarea],
  template: `
    <div class="grid w-full gap-1.5">
      <label sc-label for="message">Your message</label>
      <textarea id="message" sc-textarea placeholder="Type your message here."></textarea>
    </div>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaWithLabel {}
