import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bike-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-bike"
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
      <path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
      <path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
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
export class SvgBikeIcon {
  readonly class = input('');
}
