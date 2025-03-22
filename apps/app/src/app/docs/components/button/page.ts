import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ButtonDemo } from './button-demo';

@Component({
  selector: 'app-page',
  imports: [PreviewCodeTabs, ButtonDemo],
  template: `
    <app-preview-code-tabs [code]="code" title="Variants">
      <app-button-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
  code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-button-demo',
  imports: [ScButton],
  template: \`
    <!-- Primary Button -->
    <button sc-button variant="primary">Primary</button>

    <!-- Secondary Button -->
    <button sc-button variant="secondary">Secondary</button>

    <!-- Destructive Button -->
    <button sc-button variant="destructive">Destructive</button>

    <!-- Outline Button -->
    <button sc-button variant="outline">Outline</button>

    <!-- Ghost Button -->
    <button sc-button variant="ghost">Ghost</button>

    <!-- Link Button -->
    <button sc-button variant="link">Link</button>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemo {}`;
}
