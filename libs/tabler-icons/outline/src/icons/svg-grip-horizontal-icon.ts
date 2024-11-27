import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-grip-horizontal-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-grip-horizontal"
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
      <path d="M5 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M5 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M19 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M19 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
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
export class SvgGripHorizontalIcon {
  readonly class = input('');
}
