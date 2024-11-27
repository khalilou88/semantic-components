import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-alphabet-hebrew-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-alphabet-hebrew"
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
      <path d="M7 6c2.333 5.143 6.611 6.857 9.333 12" />
      <path
        d="M13.667 14c2.505 -1.5 2.666 -4.141 2.666 -5.333c0 -1.778 -.443 -2.667 -.443 -2.667"
      />
      <path d="M7.485 18s-.485 -.905 -.485 -2.714c0 -1.172 .164 -3.722 2.641 -5.27" />
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
export class SvgAlphabetHebrewIcon {
  readonly class = input('');
}
