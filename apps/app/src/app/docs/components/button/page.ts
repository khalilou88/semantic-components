import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton } from '@semantic-components/ui';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';

@Component({
  selector: 'app-page',
  imports: [PreviewCodeTabs, ScButton],
  template: `
    <app-preview-code-tabs>
      <div class="flex flex-wrap gap-2">
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
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {}
