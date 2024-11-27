import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-sun-electricity-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sun-electricity"
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
      <path d="M8 12a4 4 0 0 0 4 4m0 -8a4 4 0 0 0 -4 4" />
      <path d="M3 12h1" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M5.6 5.6l.7 .7" />
      <path d="M6.3 17.7l-.7 .7" />
      <path d="M20 7l-3 5h4l-3 5" />
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
export class SvgSunElectricityIcon {
  readonly class = input('');
}
