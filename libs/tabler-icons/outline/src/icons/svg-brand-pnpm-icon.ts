import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-brand-pnpm-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-pnpm"
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
      <path d="M3 17h4v4h-4z" />
      <path d="M10 17h4v4h-4z" />
      <path d="M17 17h4v4h-4z" />
      <path d="M17 10h4v4h-4z" />
      <path d="M17 3h4v4h-4z" />
      <path d="M10 10h4v4h-4z" />
      <path d="M10 3h4v4h-4z" />
      <path d="M3 3h4v4h-4z" />
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
export class SvgBrandPnpmIcon {
  readonly class = input('');
}
