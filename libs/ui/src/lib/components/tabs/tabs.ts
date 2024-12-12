import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  contentChildren,
  input,
} from '@angular/core';

import { cn } from '../../utils';
import { ScTab } from './tab';

@Component({
  selector: 'sc-tabs',
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
export class ScTabs implements AfterViewInit {
  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  readonly tabs = contentChildren(ScTab, { descendants: true });

  ngAfterViewInit() {
    console.log(this.tabs());

    // get all active tabs
    let activeTabs = this.tabs().filter((tab) => tab.active());

    if (activeTabs.length > 1) {
      throw new Error('Only one tab can be active');
    }

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs()[0]);
    }
  }

  selectTab(tab: ScTab) {
    // deactivate all tabs
    this.tabs().forEach((tab) => tab.active.set(false));

    // activate the tab the user has clicked on.
    tab.active.set(true);
  }
}
