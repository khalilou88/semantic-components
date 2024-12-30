import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'sc-tab-content2',
  imports: [],
  template: `
    <ng-template #template>
      <ng-content />
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTabContent2 {
  readonly template = viewChild.required<TemplateRef<unknown>>('template');
}
