import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-play-football-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-play-football"
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M3 17l5 1l.75 -1.5" />
      <path d="M14 21v-4l-4 -3l1 -6" />
      <path d="M6 12v-3l5 -1l3 3l3 1" />
      <path d="M19.5 20a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" />
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
export class SvgPlayFootballIcon {
  readonly class = input('');
}
