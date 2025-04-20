import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScCodeHighlighter } from '@semantic-components/ui';

import { TocHeadingDirective } from '../../../components/toc/toc-heading.directive';

@Component({
  selector: 'app-installation-page',
  imports: [ScCodeHighlighter, TocHeadingDirective],
  template: `
    <div class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-2xl font-semibold tracking-tight" tocHeading>Dependencies</h2>
          <p class="text-muted-foreground">Install the following dependencies.</p>
        </div>
      </div>

      <sc-code-highlighter
        code="npm install @semantic-components/ui @semantic-components/utils @semantic-icons/lucide-icons tw-animate-css class-variance-authority clsx tailwind-merge"
        language="shellscript"
      />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InstallationPage {}
