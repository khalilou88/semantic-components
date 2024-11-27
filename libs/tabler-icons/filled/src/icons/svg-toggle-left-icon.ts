import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-toggle-left-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-toggle-left"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 9a3 3 0 1 1 -3 3l.005 -.176a3 3 0 0 1 2.995 -2.824" />
      <path d="M16 5a7 7 0 0 1 0 14h-8a7 7 0 0 1 0 -14zm0 2h-8a5 5 0 1 0 0 10h8a5 5 0 0 0 0 -10" />
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
export class SvgToggleLeftIcon {
  readonly class = input('');
}
