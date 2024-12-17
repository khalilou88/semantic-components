import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'sc-hover-card',
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
export class ScHoverCard {
  readonly templateRef = input.required<TemplateRef<unknown>>();
}
