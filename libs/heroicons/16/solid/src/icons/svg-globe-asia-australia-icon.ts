import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-globe-asia-australia-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7 5.5a5.485 5.485 0 0 1-4.007-1.732l.28-.702a.402.402 0 0 1 .658-.135.804.804 0 0 0 1.138 0l.012-.012a.822.822 0 0 0 .154-.949l-.055-.11a.497.497 0 0 1 .134-.611L8.14 7.788a.57.57 0 0 0 .154-.7.57.57 0 0 1 .33-.796l.028-.01a1.788 1.788 0 0 0 1.13-1.13l.072-.214a.747.747 0 0 0-.18-.764L8.293 2.793A1 1 0 0 1 8.09 2.5 5.5 5.5 0 0 1 12.9 10.5h-.486a1 1 0 0 1-.707-.293l-.353-.353a1.207 1.207 0 0 0-1.708 0l-.531.531a1 1 0 0 1-.26.188l-.343.17a.927.927 0 0 0-.512.83v.177c0 .414.336.75.75.75a.75.75 0 0 1 .751.793c-.477.135-.98.207-1.501.207Z"
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
export class SvgGlobeAsiaAustraliaIcon {
  readonly class = input('');
}
