import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-editor-page',
  imports: [ScEditor],
  template: `
    <sc-editor />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EditorPage {}
