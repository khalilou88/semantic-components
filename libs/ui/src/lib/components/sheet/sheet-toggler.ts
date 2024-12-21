import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { SvgMenuIcon, SvgXIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';
import { ScButton } from '../button';
import { ScSheetTrigger } from './sheet-trigger';

@Component({
  selector: 'sc-sheet-toggler',
  imports: [ScButton, SvgMenuIcon, SvgXIcon],
  template: `
    <button
      [class]="classes()"
      (click)="toggle()"
      sc-button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      type="button"
    >
      @if (sidebarState.open()) {
        <svg-x-icon />
      }

      @if (!sidebarState.open()) {
        <svg-menu-icon />
      }

      <span class="sr-only">Toggle Sidebar</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSheetToggler {
  sidebarState = inject(ScSheetTrigger);

  class = input<string>('');

  classes = computed(() => cn('', this.class()));

  toggle() {
    // this.sidebarState.toggle();
  }
}
