import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DropdownComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-dropdown-page',
  standalone: true,
  imports: [CommonModule, DropdownComponent],
  template: `
    <p>nav-page works!</p>

    <sc-dropdown>
      <ng-container ngProjectAs="dropdown-items">
        <li>
          <a
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            href="#"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            href="#"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            href="#"
          >
            Earnings
          </a>
        </li>
        <li>
          <a
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            href="#"
          >
            Sign out
          </a>
        </li>
      </ng-container>
    </sc-dropdown>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownPageComponent {}
