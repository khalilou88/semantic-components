import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-arrow-down-left-icon',
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
        fill-rule="evenodd"
        d="M14.78 5.22a.75.75 0 0 0-1.06 0L6.5 12.44V6.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5H7.56l7.22-7.22a.75.75 0 0 0 0-1.06Z"
        clip-rule="evenodd"
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
export class SvgArrowDownLeftIcon {
  readonly class = input('');
}
