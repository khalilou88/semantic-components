import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-sunglasses-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-sunglasses"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M8 3a1 1 0 1 1 0 2h-1.257l-2.4 8h5.657a1 1 0 0 1 1 1v1h2v-1a1 1 0 0 1 1 -1h5.656l-2.4 -8h-1.256a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 1 -1h2a1 1 0 0 1 .958 .713l3.01 10.036l.022 .112l.008 .08l.002 2.559a4.5 4.5 0 0 1 -8.972 .5h-2.056a4.5 4.5 0 0 1 -8.972 -.5v-2.518l.004 -.071l.014 -.103l.018 -.076l3.006 -10.02a1 1 0 0 1 .958 -.712z"
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
export class SvgSunglassesIcon {
  readonly class = input('');
}
