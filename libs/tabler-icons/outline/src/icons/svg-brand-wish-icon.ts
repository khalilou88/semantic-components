import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-brand-wish-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-wish"
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
      <path
        d="M2 6l5.981 2.392l-.639 6.037c-.18 .893 .06 1.819 .65 2.514a3 3 0 0 0 2.381 1.057a4.328 4.328 0 0 0 4.132 -3.57c-.18 .893 .06 1.819 .65 2.514a3 3 0 0 0 2.38 1.056a4.328 4.328 0 0 0 4.132 -3.57l.333 -4.633"
      />
      <path d="M14.504 14.429l.334 -3" />
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
export class SvgBrandWishIcon {
  readonly class = input('');
}
