import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-glass-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-glass"
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
      <path d="M8 21h8" />
      <path d="M12 16v5" />
      <path d="M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6" />
      <path d="M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0 -10 0" />
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
export class SvgGlassIcon {
  readonly class = input('');
}
