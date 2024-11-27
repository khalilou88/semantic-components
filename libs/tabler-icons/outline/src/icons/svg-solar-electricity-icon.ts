import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-solar-electricity-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-solar-electricity"
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
        d="M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97z"
      />
      <path d="M8 6v12" />
      <path d="M12 12h-8" />
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
export class SvgSolarElectricityIcon {
  readonly class = input('');
}
