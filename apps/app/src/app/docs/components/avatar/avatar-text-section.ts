import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AvatarText } from './avatar-text';

@Component({
  selector: 'app-avatar-text-section',
  imports: [AvatarText, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-avatar-text />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarTextSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScAvatar, ScAvatarFallback } from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-text',
  imports: [ScAvatar, ScAvatarFallback],
  template: \`
    <sc-avatar
      class="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none"
    >
      <div class="flex size-full items-center justify-center text-base" sc-avatar-fallback>KL</div>
    </sc-avatar>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarText {}`;
}
