import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-editor-page',
  imports: [CommonModule, ScEditor],
  template: `
    <p>editor-page works!</p>

    <sc-editor />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorPageComponent {}
