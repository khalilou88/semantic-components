import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { ButtonDemo } from './button-demo';

@Component({
  selector: 'app-button-demo-section',
  imports: [PreviewCodeTabs, ButtonDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-button-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-button-demo',
  imports: [ScButton],
  template: \`
    <div class="flex flex-wrap gap-2 content-center">
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
    </div>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemo {}`;
}
