import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-candle-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-candle"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 10h-4a2 2 0 0 0 -2 2v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1 -1v-9a2 2 0 0 0 -2 -2z" />
      <path
        d="M11.254 2.334l-1.55 1.737c-1.042 1.277 -.898 3.097 .296 4.166a3 3 0 0 0 4.196 -4.28l-1.452 -1.624a1 1 0 0 0 -1.491 .001z"
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
export class SvgCandleIcon {
  readonly class = input('');
}
