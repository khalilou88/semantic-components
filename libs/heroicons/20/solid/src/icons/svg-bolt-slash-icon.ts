import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-bolt-slash-icon',
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
        d="M2.22 2.22a.75.75 0 0 1 1.06 0l14.5 14.5a.75.75 0 1 1-1.06 1.06L2.22 3.28a.75.75 0 0 1 0-1.06Z"
        clip-rule="evenodd"
      />
      <path
        d="M4.73 7.912 2.191 10.75A.75.75 0 0 0 2.75 12h6.068L4.73 7.912ZM9.233 12.415l-1.216 5.678a.75.75 0 0 0 1.292.657l2.956-3.303-3.032-3.032ZM15.27 12.088l2.539-2.838A.75.75 0 0 0 17.25 8h-6.068l4.088 4.088ZM10.767 7.585l1.216-5.678a.75.75 0 0 0-1.292-.657L7.735 4.553l3.032 3.032Z"
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
export class SvgBoltSlashIcon {
  readonly class = input('');
}
