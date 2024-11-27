import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-antenna-off-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-antenna-off"
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
      <path d="M20 4v8" />
      <path d="M16 4.5v7" />
      <path d="M12 5v3m0 4v9" />
      <path d="M8 8v2.5" />
      <path d="M4 6v4" />
      <path d="M20 8h-8m-4 0h-4" />
      <path d="M3 3l18 18" />
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
export class SvgAntennaOffIcon {
  readonly class = input('');
}
