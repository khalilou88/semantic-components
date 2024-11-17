import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `
    <sc-nav />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavPageComponent {}
