import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { EditorDemo } from './editor-demo';

@Component({
  selector: 'app-editor-demo-section',
  imports: [PreviewCodeTabs, EditorDemo],
  template: `
    <app-preview-code-tabs [code]="code">
      <app-editor-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorDemoSection {
  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import {
  ScEditor,
  ScEditorBlockquote,
  ScEditorBold,
  ScEditorBulletList,
  ScEditorCode,
  ScEditorGroup,
  ScEditorHighlight,
  ScEditorHorizontalRule,
  ScEditorItalic,
  ScEditorOrderedList,
  ScEditorRedo,
  ScEditorStrike,
  ScEditorTextAlignCenter,
  ScEditorTextAlignLeft,
  ScEditorTextAlignRight,
  ScEditorToolbar,
  ScEditorUnderline,
  ScEditorUndo,
  ScEditorUnsetLink,
  ScSeparator,
} from '@semantic-components/ui';

@Component({
  selector: 'app-editor-demo',
  imports: [
    ScEditor,
    ScEditorUndo,
    ScEditorRedo,
    ScEditorHighlight,
    ScEditorBold,
    ScEditorUnderline,
    ScEditorItalic,
    ScEditorBlockquote,
    ScEditorBulletList,
    ScEditorOrderedList,
    ScSeparator,
    ScEditorGroup,
    ScEditorStrike,
    ScEditorHorizontalRule,
    ScEditorCode,
    ScEditorToolbar,
    ScEditorUnsetLink,
    ScEditorTextAlignRight,
    ScEditorTextAlignLeft,
    ScEditorTextAlignCenter,
    ReactiveFormsModule,
  ],
  template: \`
    <form [formGroup]="editorForm">
      <sc-editor formControlName="content">
        <sc-editor-toolbar>
          <sc-editor-group>
            <sc-editor-undo />
            <sc-editor-redo />
            <sc-separator class="h-5" orientation="vertical" />
            <sc-editor-bold />
            <sc-editor-italic />
            <sc-editor-underline />
            <sc-editor-highlight />
            <sc-editor-unset-link />
            <sc-separator class="h-5" orientation="vertical" />
            <sc-editor-text-align-left />
            <sc-editor-text-align-center />
            <sc-editor-text-align-right />
          </sc-editor-group>
          <sc-editor-group>
            <sc-separator class="h-5" orientation="vertical" />
            <sc-editor-bullet-list />
            <sc-editor-ordered-list />
            <sc-editor-blockquote />
            <sc-separator class="h-5" orientation="vertical" />
            <sc-editor-strike />
            <sc-editor-horizontal-rule />
            <sc-editor-code />
          </sc-editor-group>
        </sc-editor-toolbar>
      </sc-editor>
    </form>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorDemo {
  protected readonly editorForm = new FormGroup({
    content: new FormControl(\`  
      <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  \`),
  });
}
`;
}
