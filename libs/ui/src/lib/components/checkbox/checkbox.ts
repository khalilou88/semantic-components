import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
  signal,
} from '@angular/core';

import { cn } from '../../utils';

@Component({
  selector: 'input[sc-checkbox]',
  imports: [],
  template: `
    <ng-content />
    <svg
      class="absolute top-0 left-0 w-4 h-4 pointer-events-none  stroke-white mt-1 outline-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `,
  host: {
    '[class]': 'classes()',
    '[attr.data-state]': 'state()',
    '(click)': 'toggle()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox {
  state = signal('');

  class = input<string>('');

  classes = computed(() =>
    cn(
      'peer relative top-0 left-0 appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-blue-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400',
      this.class(),
    ),
  );

  toggle() {
    console.log('toggle');

    if (this.state() === 'checked') {
      this.state.set('');
    } else {
      this.state.set('checked');
    }
  }

  //https://marek-rozmus.medium.com/styling-checkbox-with-tailwind-46a92c157e2d
}
