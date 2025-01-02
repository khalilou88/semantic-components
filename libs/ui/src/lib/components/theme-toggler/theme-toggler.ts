import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
} from '@angular/core';

import { SiMoonIcon, SiSunIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScTooltip } from '../tooltip';
import { ScTheme } from './theme';

@Component({
  selector: 'sc-theme-toggler',
  imports: [SiMoonIcon, SiSunIcon, ScTooltip, ScButton],
  template: `
    <button
      [scTooltip]="message()"
      (click)="toggleTheme()"
      sc-button
      variant="outline"
      size="icon"
      type="button"
    >
      @if (theme.value() === 'light') {
        <svg si-moon-icon></svg>
      }

      @if (theme.value() === 'dark') {
        <svg si-sun-icon></svg>
      }
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggler {
  theme = inject(ScTheme);

  message = computed(() => {
    if (this.theme.value() === 'light') {
      return 'Toggle dark mode';
    }

    return 'Toggle light mode';
  });

  toggleTheme() {
    if (this.theme.value() === 'light') {
      this.theme.value.set('dark');
    } else {
      this.theme.value.set('light');
    }
  }
}
