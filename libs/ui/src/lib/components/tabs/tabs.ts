import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  template: `
    <div [class]="labelsHostClasses()" role="tablist">
      @for (tab of tabs(); track tab) {
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
          [attr.data-state]="tab.active() ? 'active' : ''"
          (click)="selectTab(tab)"
        >
          <ng-container [ngTemplateOutlet]="tab.label()"></ng-container>
        </button>
      } @empty {
        <p>There are no tabs.</p>
      }
    </div>

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

  labelsHostClass = input<string>('');

  labelsHostClasses = computed(() =>
    cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      this.labelsHostClass(),
    ),
  );

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
