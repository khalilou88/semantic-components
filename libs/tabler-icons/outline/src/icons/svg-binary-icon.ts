import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-binary-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-binary"
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
      <path d="M11 10v-5h-1m8 14v-5h-1" />
      <path
        d="M15 5m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z"
      />
      <path
        d="M10 14m0 .5a.5 .5 0 0 1 .5 -.5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5z"
      />
      <path d="M6 10h.01m-.01 9h.01" />
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
export class SvgBinaryIcon {
  readonly class = input('');
}
