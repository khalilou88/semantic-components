import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';
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
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggler {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('', this.classInput()));

  private readonly themeService = inject(ScTheme);

  protected readonly isDarkMode = computed(() => this.themeService.isDarkMode());

  protected toggleTheme() {
    this.themeService.toggleTheme();
  }
}
