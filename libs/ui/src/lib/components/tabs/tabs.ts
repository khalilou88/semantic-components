import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { ScTabContent } from './tab-content';

@Component({
  selector: 'div[sc-tabs]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTabs {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  @Input() value = '';
  @ContentChildren(ScTabContent, { descendants: true }) tabContents!: QueryList<ScTabContent>;
}
