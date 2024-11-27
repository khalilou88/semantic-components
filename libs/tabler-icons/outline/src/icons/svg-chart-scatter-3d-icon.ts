import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-chart-scatter-3d-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-chart-scatter-3d"
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
      <path d="M3 20l9 -7" />
      <path d="M12 3v10l9 7" />
      <path d="M17 12v.015" />
      <path d="M17 4.015v.015" />
      <path d="M21 8.015v.015" />
      <path d="M12 19.015v.015" />
      <path d="M3 12.015v.015" />
      <path d="M7 8.015v.015" />
      <path d="M3 4.015v.015" />
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
export class SvgChartScatter3dIcon {
  readonly class = input('');
}
