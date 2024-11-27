import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-box-align-bottom-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-bottom"
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
      <path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5z" />
      <path d="M4 9v.01" />
      <path d="M4 4v.01" />
      <path d="M9 4v.01" />
      <path d="M15 4v.01" />
      <path d="M20 4v.01" />
      <path d="M20 9v.01" />
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
export class SvgBoxAlignBottomIcon {
  readonly class = input('');
}
