import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScSeparator } from '@semantic-components/ui';

@Component({
  selector: 'app-separator-demo',
  imports: [ScSeparator],
  template: `
    <div class="space-y-1">
      <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
      <p class="text-sm text-muted-foreground">An open-source UI component library.</p>
    </div>
    <sc-separator class="my-4" />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <sc-separator orientation="vertical" />
      <div>Docs</div>
      <sc-separator orientation="vertical" />
      <div>Source</div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeparatorDemo {}
