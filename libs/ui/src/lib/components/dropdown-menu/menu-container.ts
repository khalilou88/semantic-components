import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  signal,
} from '@angular/core';

@Component({
  selector: 'sc-menu-container',
  imports: [],
  template: `
    <p>I am here</p>
    @if (templateRef()) {
      <ng-container *ngTemplateOutlet="templateRef()"></ng-container>
    }
  `,
  host: {},
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMenuContainer {
  templateRef = signal<TemplateRef<unknown> | null>(null);
}
