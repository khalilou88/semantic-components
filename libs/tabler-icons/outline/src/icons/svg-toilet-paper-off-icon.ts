import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-toilet-paper-off-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-toilet-paper-off"
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
      <path
        d="M4.27 4.28c-.768 1.27 -1.27 3.359 -1.27 5.72c0 3.866 1.343 7 3 7s3 -3.134 3 -7c0 -.34 -.01 -.672 -.03 -1"
      />
      <path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
      <path d="M7 3h11" />
      <path d="M21 10v7m-1.513 2.496l-1.487 -.496l-3 2l-3 -3l-3 2v-10" />
      <path d="M6 10h.01" />
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
export class SvgToiletPaperOffIcon {
  readonly class = input('');
}
