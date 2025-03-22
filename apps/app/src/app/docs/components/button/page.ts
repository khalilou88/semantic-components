import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';

@Component({
  selector: 'app-page',
  imports: [PreviewCodeTabs],
  template: `
    <app-preview-code-tabs></app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {}
