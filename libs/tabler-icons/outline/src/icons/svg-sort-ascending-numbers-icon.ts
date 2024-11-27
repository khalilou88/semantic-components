import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-sort-ascending-numbers-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sort-ascending-numbers"
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
      <path d="M4 15l3 3l3 -3" />
      <path d="M7 6v12" />
      <path d="M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
      <path d="M17 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M19 16v3a2 2 0 0 1 -2 2h-1.5" />
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
export class SvgSortAscendingNumbersIcon {
  readonly class = input('');
}
