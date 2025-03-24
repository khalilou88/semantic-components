import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { AspectRatioDemo } from './aspect-ratio-demo';

@Component({
  selector: 'app-aspect-ratio-demo-section',
  imports: [PreviewCodeTabs, AspectRatioDemo],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-aspect-ratio-demo />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioDemoSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-demo',
  imports: [ScAspectRatio, NgOptimizedImage],
  template: \`
    <sc-aspect-ratio class="bg-muted" [ratio]="16 / 9">
      <img
        class="h-full w-full rounded-md object-cover"
        ngSrc="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        priority
      />
    </sc-aspect-ratio>
  \`,
  styles: \`\`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioDemo {}`;
}
