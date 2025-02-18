import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  TemplateRef,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'sc-toast-container',
  imports: [NgTemplateOutlet],
  template: `
    @if (templateRef()) {
      <ng-container *ngTemplateOutlet="templateRef(); injector: injector"></ng-container>
    }
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToastContainer {
  readonly templateRef = input<TemplateRef<unknown> | null>(null);

  protected readonly injector = inject(Injector);
}
