import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-pin-invoke-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-pin-invoke"
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
      <path d="M21 13v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h9" />
      <path d="M19 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M10 11h4v4" />
      <path d="M10 15l4 -4" />
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
export class SvgPinInvokeIcon {
  readonly class = input('');
}
