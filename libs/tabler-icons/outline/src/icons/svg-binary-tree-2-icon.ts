import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-binary-tree-2-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-binary-tree-2"
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
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M12 8v8" />
      <path d="M6.316 12.496l4.368 -4.992" />
      <path d="M17.684 12.496l-4.366 -4.99" />
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
export class SvgBinaryTree2Icon {
  readonly class = input('');
}
