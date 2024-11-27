import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-jump-rope-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-jump-rope"
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
      <path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
      <path d="M16 3m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
      <path d="M4 14m0 2a2 2 0 0 1 2 -2h0a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h0a2 2 0 0 1 -2 -2z" />
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
export class SvgJumpRopeIcon {
  readonly class = input('');
}
