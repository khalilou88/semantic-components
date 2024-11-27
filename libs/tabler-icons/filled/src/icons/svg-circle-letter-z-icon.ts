import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-circle-letter-z-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-circle-letter-z"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m2 5h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.382l-3.276 6.553a1 1 0 0 0 .894 1.447h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-2.382l3.276 -6.553a1 1 0 0 0 -.894 -1.447"
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
export class SvgCircleLetterZIcon {
  readonly class = input('');
}
