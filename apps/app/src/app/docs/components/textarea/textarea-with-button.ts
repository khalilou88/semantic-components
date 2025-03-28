import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-with-button',
  imports: [ScTextarea, ScButton],
  template: `
    <div class="grid w-full gap-2">
      <textarea sc-textarea placeholder="Type your message here."></textarea>
      <button sc-button>Send message</button>
    </div>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaWithButton {}
