import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-brand-cloudflare-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-cloudflare"
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
        d="M13.031 7.007c2.469 -.007 3.295 1.293 3.969 2.993c4 0 4.994 3.825 5 6h-20c-.001 -1.64 1.36 -2.954 3 -3c0 -1.5 1 -3 3 -3c.66 -1.942 2.562 -2.986 5.031 -2.993z"
      />
      <path d="M12 13h6" />
      <path d="M17 10l-2.5 6" />
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
export class SvgBrandCloudflareIcon {
  readonly class = input('');
}
