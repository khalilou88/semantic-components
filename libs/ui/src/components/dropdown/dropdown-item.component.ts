import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuItem } from '@angular/cdk/menu';

//TODO try to add CdkMenuItem

@Component({
  selector: 'sc-dropdown-item',
  standalone: true,
  imports: [CommonModule, CdkMenuItem],
  template: `
    <li>
      <a
        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        href="javascript:void(0)"
      >
        {{ text() }}
      </a>
    </li>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent {
  text = input.required<string>();
}