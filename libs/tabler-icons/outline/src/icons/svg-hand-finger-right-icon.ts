import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-hand-finger-right-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-hand-finger-right"
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
      <path d="M12 8h8.5a1.5 1.5 0 0 1 0 3h-7.5" />
      <path d="M13.5 11h2a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M14.5 14a1.5 1.5 0 0 1 0 3h-1.5" />
      <path
        d="M13.5 17a1.5 1.5 0 1 1 0 3h-4.5a6 6 0 0 1 -6 -6v-2v.208a6 6 0 0 1 2.7 -5.012l.3 -.196q .718 -.468 5.728 -3.286a1.5 1.5 0 0 1 2.022 .536c.44 .734 .325 1.674 -.28 2.28l-1.47 1.47"
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
export class SvgHandFingerRightIcon {
  readonly class = input('');
}
