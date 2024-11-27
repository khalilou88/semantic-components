import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-temperature-sun-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-temperature-sun"
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
      <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" />
      <path d="M4 9h4" />
      <path d="M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124" />
      <path d="M13 3v1" />
      <path d="M21 12h1" />
      <path d="M13 20v1" />
      <path d="M19.4 5.6l-.7 .7" />
      <path d="M18.7 17.7l.7 .7" />
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
export class SvgTemperatureSunIcon {
  readonly class = input('');
}
