import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-currency-iranian-rial-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-currency-iranian-rial"
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
      <path d="M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1" />
      <path d="M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1" />
      <path d="M21 14v1.096a5 5 0 0 1 -3.787 4.85l-.213 .054" />
      <path d="M11 18h.01" />
      <path d="M14 18h.01" />
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
export class SvgCurrencyIranianRialIcon {
  readonly class = input('');
}
