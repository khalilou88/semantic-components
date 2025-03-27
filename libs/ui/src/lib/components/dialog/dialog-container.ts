import { DIALOG_DATA } from '@angular/cdk/dialog';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  TemplateRef,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-dialog-container',
  imports: [NgTemplateOutlet],
  template: `
    @if (data.templateRef) {
      <ng-container *ngTemplateOutlet="data.templateRef" />
    }
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialogContainer {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block size-full', this.classInput()));

  constructor(@Inject(DIALOG_DATA) public data: { templateRef: TemplateRef<unknown> }) {}
}
