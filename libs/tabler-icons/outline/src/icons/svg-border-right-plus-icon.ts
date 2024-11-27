import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-border-right-plus-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-border-right-plus"
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
      <path d="M20 20v-16" />
      <path d="M16 4v.01" />
      <path d="M12 4v.01" />
      <path d="M8 4v.01" />
      <path d="M4 4v.01" />
      <path d="M4 8v.01" />
      <path d="M4 12v.01" />
      <path d="M4 16v.01" />
      <path d="M16 20v.01" />
      <path d="M12 20v.01" />
      <path d="M8 20v.01" />
      <path d="M4 20v.01" />
      <path d="M15 12h-6" />
      <path d="M12 9v6" />
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
export class SvgBorderRightPlusIcon {
  readonly class = input('');
}
