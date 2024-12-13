import {
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { SVG } from './svg';

@Component({
  selector: 'input[sc-checkbox]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckbox {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'flex peer appearance-none shrink-0 w-4 h-4 border-2 border-blue-200 rounded-sm bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-blue-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400',
      this.class(),
    ),
  );

  constructor(private viewContainer: ViewContainerRef) {
    afterNextRender(() => {
      this.viewContainer.createComponent(SVG);
    });
  }
}
