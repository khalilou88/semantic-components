import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

import { ButtonVariants, ScButtonBase } from '../button';
import { ScSidebarState } from './sidebar-state';

@Component({
  selector: 'button[sc-sidebar-toggler]',
  imports: [],
  template: `
    <ng-content />
    <span class="sr-only">Toggle Sidebar</span>
  `,
  host: {
    '[class]': 'class()',
    'data-sidebar': 'trigger',
    '(click)': 'toggleSidebar()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSidebarToggler extends ScButtonBase {
  private readonly sidebarState = inject(ScSidebarState);

  override readonly variantInput = input<ButtonVariants['variant']>('ghost');

  override readonly sizeInput = input<ButtonVariants['size']>('icon');

  protected toggleSidebar() {
    this.sidebarState.toggleSidebar();
  }
}
