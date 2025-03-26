import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

import { PreviewCodeTabs } from '../../../components/preview-code-tabs/preview-code-tabs';
import { TooltipPosition } from './tooltip-position';

@Component({
  selector: 'app-tooltip-position-section',
  imports: [TooltipPosition, PreviewCodeTabs],
  template: `
    <app-preview-code-tabs [code]="code" [title]="title()" [level]="level()">
      <app-tooltip-position />
    </app-preview-code-tabs>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipPositionSection {
  readonly title = input<string>('');

  readonly level = input<'2' | '3'>('2');

  protected readonly code = `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
  
  import { ScButton, ScTooltip } from '@semantic-components/ui';
  
  @Component({
    selector: 'app-tooltip-position',
    imports: [ScTooltip, ScButton],
    template: \`
      <div class="grid grid-cols-2 gap-2">
        <button sc-button variant="outline" scTooltip="Tooltip below" position="below">
          Tooltip below
        </button>
  
        <button sc-button variant="outline" scTooltip="Tooltip above" position="above">
          Tooltip above
        </button>
  
        <button sc-button variant="outline" scTooltip="Tooltip left" position="left">
          Tooltip left
        </button>
  
        <button sc-button variant="outline" scTooltip="Tooltip right" position="right">
          Tooltip right
        </button>
      </div>
    \`,
    styles: \`\`,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class TooltipPosition {}`;
}
