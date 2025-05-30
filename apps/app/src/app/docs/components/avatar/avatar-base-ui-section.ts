import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AvatarBaseUi } from './avatar-base-ui';

@Component({
  selector: 'app-avatar-base-ui-section',
  imports: [AvatarBaseUi, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-avatar-base-ui />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarBaseUiSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
import { ScAvatar, ScAvatarFallback, ScAvatarImage } from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-base-ui',
  imports: [ScAvatar, ScAvatarImage, ScAvatarFallback],
  template: \`
    <sc-avatar
      class="inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle text-base font-medium text-black select-none"
    >
      <img
        class="size-full object-cover"
        alt=""
        sc-avatar-image
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
        width="48"
        height="48"
      />
      <div class="flex size-full items-center justify-center text-base" sc-avatar-fallback>LT</div>
    </sc-avatar>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarBaseUi {}`;
}
