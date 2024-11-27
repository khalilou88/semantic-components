import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-box-align-top-right-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top-right"
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
      <path d="M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1z" />
      <path d="M20 15.01v-.01" />
      <path d="M20 20.01v-.01" />
      <path d="M15 20.01v-.01" />
      <path d="M9 20.01v-.01" />
      <path d="M9 4.01v-.01" />
      <path d="M4 20.01v-.01" />
      <path d="M4 15.01v-.01" />
      <path d="M4 9.01v-.01" />
      <path d="M4 4.01v-.01" />
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
export class SvgBoxAlignTopRightIcon {
  readonly class = input('');
}
