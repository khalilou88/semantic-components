import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-icons-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-icons"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.25 2.603a4.5 4.5 0 1 1 -2.25 3.897l.006 -.229a4.5 4.5 0 0 1 2.244 -3.668" />
      <path
        d="M5.632 13.504a1 1 0 0 1 1.736 0l4 7a1 1 0 0 1 -.868 1.496h-8a1 1 0 0 1 -.868 -1.496z"
      />
      <path
        d="M13.293 2.293a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1 -1.414 1.414l-7 -7a1 1 0 0 1 0 -1.414"
      />
      <path d="M20.293 2.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1 -1.414 -1.414z" />
      <path d="M21 13a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-7a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1z" />
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
export class SvgIconsIcon {
  readonly class = input('');
}
