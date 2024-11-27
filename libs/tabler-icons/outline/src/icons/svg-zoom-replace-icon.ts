import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-zoom-replace-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-zoom-replace"
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
      <path d="M21 21l-6 -6" />
      <path d="M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403" />
      <path d="M17 4v4h-4" />
      <path d="M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403" />
      <path d="M3 16v-4h4" />
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
export class SvgZoomReplaceIcon {
  readonly class = input('');
}
