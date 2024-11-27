import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-chart-column-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-chart-column"
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
      <path d="M4 20h3" />
      <path d="M17 20h3" />
      <path d="M10.5 20h3" />
      <path d="M4 16h3" />
      <path d="M17 16h3" />
      <path d="M10.5 16h3" />
      <path d="M4 12h3" />
      <path d="M17 12h3" />
      <path d="M10.5 12h3" />
      <path d="M4 8h3" />
      <path d="M17 8h3" />
      <path d="M4 4h3" />
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
export class SvgChartColumnIcon {
  readonly class = input('');
}
