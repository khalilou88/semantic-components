import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScBadge } from '@semantic-components/ui';

@Component({
  selector: 'app-badge-demo',
  imports: [ScBadge],
  template: `
    <div class="flex flex-wrap gap-2 content-center">
      <div sc-badge variant="primary">Primary</div>
      <div sc-badge variant="secondary">Secondary</div>
      <div sc-badge variant="destructive">Destructive</div>
      <div sc-badge variant="outline">Outline</div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemo {}
