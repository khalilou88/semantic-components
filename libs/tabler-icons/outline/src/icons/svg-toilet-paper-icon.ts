import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-toilet-paper-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-toilet-paper"
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
      <path d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
      <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
      <path d="M6 3h12" />
      <path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
      <path d="M6 10h.01" />
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
export class SvgToiletPaperIcon {
  readonly class = input('');
}
