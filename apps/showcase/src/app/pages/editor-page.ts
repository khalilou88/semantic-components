import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-editor-page',
  imports: [ScEditor, ReactiveFormsModule],
  template: `
    <form [formGroup]="editorForm">
      <sc-editor formControlName="content" />
    </form>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EditorPage {
  editorForm = new FormGroup({
    content: new FormControl(`  
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
  `),
  });
}
