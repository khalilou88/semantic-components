import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-woman-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-woman"
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
      <path d="M10 16v5" />
      <path d="M14 16v5" />
      <path d="M8 16h8l-2 -7h-4z" />
      <path d="M5 11c1.667 -1.333 3.333 -2 5 -2" />
      <path d="M19 11c-1.667 -1.333 -3.333 -2 -5 -2" />
      <path d="M12 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
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
export class SvgWomanIcon {
  readonly class = input('');
}
