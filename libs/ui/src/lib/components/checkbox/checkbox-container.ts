import { ChangeDetectionStrategy, Component, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-checkbox-container',
  imports: [],
  template: `
    <div class="flex">
      <ng-template [ngTemplateOutlet]="template"></ng-template>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxContainer {
  template?: TemplateRef<unknown>;
}
