import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-play-volleyball-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-play-volleyball"
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
      <path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M20.5 10a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
      <path d="M2 16l5 1l.5 -2.5" />
      <path d="M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2" />
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
export class SvgPlayVolleyballIcon {
  readonly class = input('');
}
