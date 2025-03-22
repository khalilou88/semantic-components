import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';

import { SiMoonIcon, SiSunIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScTheme } from './theme';

@Component({
  selector: 'sc-theme-toggler',
  imports: [SiMoonIcon, SiSunIcon, ScButton],
  template: `
    <button (click)="toggleTheme()" sc-button variant="outline" size="icon" type="button">
      @if (isDarkMode()) {
        <svg si-sun-icon></svg>
      } @else {
        <svg si-moon-icon></svg>
      }
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggler {
  private readonly themeService = inject(ScTheme);

  protected readonly isDarkMode = computed(() => this.themeService.isDarkMode());

  protected toggleTheme() {
    this.themeService.toggleTheme();
  }
}
