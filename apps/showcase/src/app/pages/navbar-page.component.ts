import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-navbar-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <p>navbar-page works!</p>

    <sc-navbar />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarPageComponent {}
