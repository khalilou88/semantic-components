import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-wiper-wash-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-wiper-wash"
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
      <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
      <path d="M12 20l0 -14" />
      <path d="M4 6a4 4 0 0 1 .4 -1.8" />
      <path d="M7 2.1a4 4 0 0 1 2 0" />
      <path d="M12 6a4 4 0 0 0 -.4 -1.8" />
      <path d="M12 6a4 4 0 0 1 .4 -1.8" />
      <path d="M15 2.1a4 4 0 0 1 2 0" />
      <path d="M20 6a4 4 0 0 0 -.4 -1.8" />
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
export class SvgWiperWashIcon {
  readonly class = input('');
}
