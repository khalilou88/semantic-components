import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

import { ToastRef } from './toast-ref';

@Component({
  selector: 'sc-toast-container',
  imports: [NgTemplateOutlet],
  template: `
    @if (templateRef()) {
      <ng-container *ngTemplateOutlet="templateRef()"></ng-container>
    }
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToastContainer {
  readonly ref = inject(ToastRef);

  readonly templateRef = input<TemplateRef<unknown> | null>(null);

  close() {
    this.ref.close();
  }
}
