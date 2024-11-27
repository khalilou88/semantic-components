import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-window-off-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-window-off"
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
      <path
        d="M6.166 6.19a6.903 6.903 0 0 0 -1.166 3.81v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-1m0 -4v-5c0 -3.728 -3.134 -7 -7 -7a6.86 6.86 0 0 0 -3.804 1.158"
      />
      <path d="M5 13h8m4 0h2" />
      <path d="M12 3v5m0 4v9" />
      <path d="M3 3l18 18" />
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
export class SvgWindowOffIcon {
  readonly class = input('');
}
