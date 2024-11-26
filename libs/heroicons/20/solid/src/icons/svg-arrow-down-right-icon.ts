import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-arrow-down-right-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z"
      />
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
export class SvgArrowDownRightIcon {
  readonly class = input('');
}
