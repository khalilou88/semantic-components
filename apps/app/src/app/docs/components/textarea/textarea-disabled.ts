import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-disabled',
  imports: [ScTextarea],
  template: `
    <textarea sc-textarea placeholder="Type your message here." disabled></textarea>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaDisabled {}
