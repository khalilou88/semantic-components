import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-demo',
  imports: [ScTextarea],
  template: `
    <textarea sc-textarea placeholder="Type your message here."></textarea>
  `,
  host: {
    class: 'block w-full',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaDemo {}
