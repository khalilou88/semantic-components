import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-cookie-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-cookie"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M13.53 2.552l2.667 1.104a1 1 0 0 1 .414 1.53a3 3 0 0 0 3.492 4.604a1 1 0 0 1 1.296 .557l.049 .122a4 4 0 0 1 0 3.062l-.079 .151c-.467 .74 -.785 1.314 -.945 1.7c-.166 .4 -.373 1.097 -.613 2.073l-.047 .144a4 4 0 0 1 -2.166 2.164l-.139 .046c-1.006 .253 -1.705 .461 -2.076 .615c-.412 .17 -.982 .486 -1.696 .942l-.156 .082a4 4 0 0 1 -3.062 0l-.148 -.077c-.759 -.475 -1.333 -.793 -1.704 -.947c-.413 -.171 -1.109 -.378 -2.07 -.612l-.146 -.048a4 4 0 0 1 -2.164 -2.166l-.046 -.138c-.254 -1.009 -.463 -1.709 -.615 -2.078q -.256 -.621 -.942 -1.695l-.082 -.156a4 4 0 0 1 0 -3.062l.084 -.16c.447 -.692 .761 -1.262 .94 -1.692c.147 -.355 .356 -1.057 .615 -2.078l.045 -.138a4 4 0 0 1 2.166 -2.164l.141 -.047c.988 -.245 1.686 -.453 2.074 -.614c.395 -.164 .967 -.48 1.7 -.944l.152 -.08a4 4 0 0 1 3.062 0m-1.531 13.448a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m4 -3a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-8 -1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m4 -1a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m-1 -4c-.552 0 -1 .448 -1 1.01a1 1 0 1 0 2 -.01a1 1 0 0 0 -1 -1"
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
export class SvgCookieIcon {
  readonly class = input('');
}
