import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-dialog-container',
  imports: [DialogModule, NgTemplateOutlet],
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
  data = inject<{
    templateRef: TemplateRef<unknown>;
  }>(DIALOG_DATA);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block size-full', this.classInput()));
}
