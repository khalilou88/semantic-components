import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { TextareaDemoSection } from './textarea-demo-section';
import { TextareaFormSection } from './textarea-form-section';
import { TextareaWithButtonSection } from './textarea-with-button-section';
import { TextareaWithLabelSection } from './textarea-with-label-section';
import { TextareaWithTextSection } from './textarea-with-text-section';

@Component({
  selector: 'app-textarea-page',
  imports: [
    TextareaDemoSection,
    TextareaWithLabelSection,
    TextareaWithTextSection,
    TextareaWithButtonSection,
    TextareaFormSection,
  ],
  template: `
    <app-textarea-demo-section />

    <app-textarea-demo-section title="Default" />

    <app-textarea-with-label-section title="With Label" />

    <app-textarea-with-text-section title="With Text" />

    <app-textarea-with-button-section title="With Button" />

    <app-textarea-form-section title="Form" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextareaPage {}
