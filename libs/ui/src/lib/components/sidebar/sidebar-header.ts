import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-sidebar-header',
  imports: [],
  template: `
    <p>sidebar-header works!</p>
  `,
  host: {
    '[attr.data-sidebar]': 'header',
  },
  styles: `
    sc-sidebar-header {
      @apply flex flex-col gap-2 p-2;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarHeader {}
