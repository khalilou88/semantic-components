import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  signal,
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
  templateRef = signal<TemplateRef<unknown> | null>(null);
}
