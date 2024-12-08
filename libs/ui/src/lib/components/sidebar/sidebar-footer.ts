import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sc-sidebar-footer',
  imports: [],
  template: `
    <p>sidebar-footer works!</p>
  `,
  styles: `
    sc-sidebar-footer {
      @apply flex flex-col gap-2 p-2;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarFooter {}
