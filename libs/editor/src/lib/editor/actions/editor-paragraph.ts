import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import {
  ScMenu,
  ScMenuGroup,
  ScMenuItem,
  ScMenuSeparator,
  ScMenuShortcut,
  ScMenuTriggerFor,
} from '@semantic-components/ui';
import { ScToggle, ScTooltip } from '@semantic-components/ui';

import { ScEditor } from '../editor';

@Component({
  selector: 'sc-editor-paragraph',
  imports: [
    ScMenuShortcut,
    ScMenuSeparator,
    ScMenuGroup,
    ScMenuItem,
    ScMenuTriggerFor,
    ScMenu,
    ScToggle,
  ],
  template: `
    <button [scMenuTriggerFor]="menu" sc-toggle variant="outline" type="button">
      Paragraph & Headings
    </button>

    <ng-template #menu>
      <div sc-menu>
        <sc-menu-group>
          <button (click)="setParagraph()" sc-menu-item>
            <span>Paragraph</span>
            <span sc-menu-shortcut>⌘+Alt+0</span>
          </button>
        </sc-menu-group>
        <hr sc-menu-separator />
        <sc-menu-group>
          <button sc-menu-item>
            <h1>Heading 1</h1>
            <span sc-menu-shortcut>⌘+Alt+1</span>
          </button>
          <button sc-menu-item>
            <h2>Heading 2</h2>
            <span sc-menu-shortcut>⌘+Alt+2</span>
          </button>

          <button sc-menu-item>
            <h3>Heading 3</h3>
            <span sc-menu-shortcut>⌘+Alt+3</span>
          </button>

          <button sc-menu-item>
            <h4>Heading 4</h4>
            <span sc-menu-shortcut>⌘+Alt+4</span>
          </button>

          <button sc-menu-item>
            <h5>Heading 5</h5>
            <span sc-menu-shortcut>⌘+Alt+5</span>
          </button>

          <button sc-menu-item>
            <h6>Heading 6</h6>
            <span sc-menu-shortcut>⌘+Alt+6</span>
          </button>
        </sc-menu-group>
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEditorParagraph {
  private readonly parent = inject(ScEditor);

  get editor() {
    return this.parent.editor;
  }

  setParagraph() {
    this.editor.chain().focus().setParagraph().run();
  }
}
