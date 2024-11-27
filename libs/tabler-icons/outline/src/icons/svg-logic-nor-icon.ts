import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-logic-nor-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-logic-nor"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12h-4" />
      <path d="M2 9h5" />
      <path d="M2 15h5" />
      <path d="M6 5c10.667 2.1 10.667 12.6 0 14c1.806 -4.667 1.806 -9.333 0 -14z" />
      <path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLogicNorIcon {
  readonly class = input('');
}
