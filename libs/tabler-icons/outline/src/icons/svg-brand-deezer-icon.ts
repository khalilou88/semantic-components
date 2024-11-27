import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-brand-deezer-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-deezer"
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
      <path d="M3 16.5h2v.5h-2z" />
      <path d="M8 16.5h2.5v.5h-2.5z" />
      <path d="M16 17h-2.5v-.5h2.5z" />
      <path d="M21.5 17h-2.5v-.5h2.5z" />
      <path d="M21.5 13h-2.5v.5h2.5z" />
      <path d="M21.5 9.5h-2.5v.5h2.5z" />
      <path d="M21.5 6h-2.5v.5h2.5z" />
      <path d="M16 13h-2.5v.5h2.5z" />
      <path d="M8 13.5h2.5v-.5h-2.5z" />
      <path d="M8 9.5h2.5v.5h-2.5z" />
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
export class SvgBrandDeezerIcon {
  readonly class = input('');
}
