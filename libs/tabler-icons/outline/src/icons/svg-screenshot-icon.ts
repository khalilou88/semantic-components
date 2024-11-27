import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-screenshot-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-screenshot"
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
      <path d="M7 19a2 2 0 0 1 -2 -2" />
      <path d="M5 13v-2" />
      <path d="M5 7a2 2 0 0 1 2 -2" />
      <path d="M11 5h2" />
      <path d="M17 5a2 2 0 0 1 2 2" />
      <path d="M19 11v2" />
      <path d="M19 17v4" />
      <path d="M21 19h-4" />
      <path d="M13 19h-2" />
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
export class SvgScreenshotIcon {
  readonly class = input('');
}
