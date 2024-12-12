import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

//TODO try to add CdkMenuItem

@Component({
  selector: 'sc-dropdown-item',
  imports: [],
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
export class ScDropdownItem {
  text = input.required<string>();
}
