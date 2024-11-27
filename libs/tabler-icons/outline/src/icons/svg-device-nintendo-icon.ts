import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-device-nintendo-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-device-nintendo"
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
      <path d="M10 20v-16h-3a4 4 0 0 0 -4 4v8a4 4 0 0 0 4 4h3z" />
      <path d="M14 20v-16h3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-3z" />
      <circle cx="17.5" cy="15.5" r="1" fill="currentColor" />
      <circle cx="6.5" cy="8.5" r="1" fill="currentColor" />
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
export class SvgDeviceNintendoIcon {
  readonly class = input('');
}
