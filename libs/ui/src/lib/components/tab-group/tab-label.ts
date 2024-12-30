import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'sc-tab-label2',
  imports: [],
  template: `
    <ng-template #t>
      <ng-content />
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [],
})
export class ScTabLabel2 {
  readonly template = viewChild.required<TemplateRef<unknown>>('t');
}
