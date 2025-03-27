import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { BadgeDemo } from './badge-demo';

@Component({
  selector: 'app-badge-demo-section',
  imports: [PreviewCodeTabs, BadgeDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-badge-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
  import { ScBadge } from '@semantic-components/ui';
  
  @Component({
    selector: 'app-badge-demo',
    imports: [ScBadge],
    template: \`
      <div class="flex flex-wrap gap-2 content-center">
        <div sc-badge variant="primary">Primary</div>
        <div sc-badge variant="secondary">Secondary</div>
        <div sc-badge variant="destructive">Destructive</div>
        <div sc-badge variant="outline">Outline</div>
      </div>
    \`,
    styles: \`\`,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class BadgeDemo {}`;
}
