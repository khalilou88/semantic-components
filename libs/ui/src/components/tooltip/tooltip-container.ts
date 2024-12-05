import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'sc-tooltip-container',
  imports: [NgClass],
  template: `
    <div
      class="relative z-10 inline-block rounded-lg border-gray-900 bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition-opacity duration-300 dark:bg-gray-700"
      [ngClass]="{
        'mb-2': placement() === 'top',
        'mt-2': placement() === 'bottom',
        'ml-2': placement() === 'right',
        'mr-2': placement() === 'left',
      }"
      role="tooltip"
    >
      <span
        class="absolute -z-10 size-2 rotate-45 rounded-sm border-gray-900 bg-gray-900"
        [ngClass]="{
          '-bottom-1 left-1/2 -translate-x-1/2 border-b border-r': placement() === 'top',
          '-top-1 left-1/2 -translate-x-1/2 border-l border-t': placement() === 'bottom',
          '-left-1 top-1/2 -translate-y-1/2 border-b border-l': placement() === 'right',
          '-right-1 top-1/2 -translate-y-1/2 border-r border-t': placement() === 'left',
        }"
      ></span>
      {{ text() }}
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTooltipContainer {
  text = input<string>('');

  placement = input<string>('bottom');
}
