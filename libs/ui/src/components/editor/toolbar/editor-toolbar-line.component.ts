import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-editor-toolbar-line',
  imports: [],
  template: `
    <div class="flex flex-wrap items-center gap-1 py-1">
      <ng-content />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorToolbarLineComponent {}
