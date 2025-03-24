import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AvatarDemo } from './avatar-demo';

@Component({
  selector: 'app-avatar-demo-section',
  imports: [AvatarDemo, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-avatar-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScAvatar, ScAvatarFallback, ScAvatarImage } from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-demo',
  imports: [ScAvatar, ScAvatarImage, ScAvatarFallback],
  template: \`
    <sc-avatar>
      <img src="https://github.com/shadcn.png" alt="@shadcn" sc-avatar-image />
      <div sc-avatar-fallback>CN</div>
    </sc-avatar>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarDemo {}`;
}
