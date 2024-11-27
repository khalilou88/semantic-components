import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-sort-0-9-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sort-0-9"
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
      <path d="M11 12h2" />
      <path d="M4 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0z" />
      <path
        d="M16 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"
      />
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
export class SvgSort09Icon {
  readonly class = input('');
}
