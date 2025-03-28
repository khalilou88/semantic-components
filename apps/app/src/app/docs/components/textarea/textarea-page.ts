import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TextareaDemoSection } from './textarea-demo-section';

@Component({
  selector: 'app-textarea-page',
  imports: [TextareaDemoSection],
  template: `
    <app-textarea-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextareaPage {}
