import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { EditorDemoSection } from './editor-demo-section';

@Component({
  selector: 'app-editor-page',
  imports: [EditorDemoSection],
  template: `
    <app-editor-demo-section />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EditorPage {}
