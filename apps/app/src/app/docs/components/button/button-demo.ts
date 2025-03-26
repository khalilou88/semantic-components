import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-button-demo',
  imports: [ScButton],
  template: `
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
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemo {}
