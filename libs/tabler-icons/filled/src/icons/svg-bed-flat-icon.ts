import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bed-flat-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-bed-flat"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 8a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
      <path d="M18 7a4 4 0 0 1 4 4v2a1 1 0 0 1 -1 1h-11a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" />
      <path d="M21 15a1 1 0 0 1 0 2h-18a1 1 0 0 1 0 -2z" />
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
export class SvgBedFlatIcon {
  readonly class = input('');
}
