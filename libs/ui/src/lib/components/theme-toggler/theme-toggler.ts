import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { SvgMoonIcon, SvgSunIcon } from '@semantic-icons/lucide-icons';

import { ScButton } from '../button';
import { ScTooltip } from '../tooltip';
import { ScTheme } from './theme';

@Component({
  selector: 'sc-theme-toggler',
  imports: [SvgMoonIcon, SvgSunIcon, ScTooltip, ScButton],
  template: `
    <button
      (click)="toggleTheme()"
      sc-button
      variant="outline"
      size="icon"
      type="button"
      scTooltip="Toggle dark mode"
    >
      @if (theme.value() === 'light') {
        <svg-moon-icon />
      }

      @if (theme.value() === 'dark') {
        <svg-sun-icon />
      }
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScThemeToggler {
  theme = inject(ScTheme);

  toggleTheme() {
    if (this.theme.value() === 'light') {
      this.theme.value.set('dark');
    } else {
      this.theme.value.set('light');
    }
  }
}
