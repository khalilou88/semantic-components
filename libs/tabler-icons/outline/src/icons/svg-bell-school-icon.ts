import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bell-school-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-bell-school"
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
      <path d="M10 10m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
      <path
        d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5"
      />
      <path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" />
      <path d="M10 10v.01" />
      <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
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
export class SvgBellSchoolIcon {
  readonly class = input('');
}
