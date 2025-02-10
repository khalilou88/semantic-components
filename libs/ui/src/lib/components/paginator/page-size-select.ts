import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { ScOption, ScSelect } from '../select';
import { DEFAULT_PAGE_SIZE } from './paginator.service';

@Component({
  selector: 'sc-page-size-select',
  imports: [ScSelect, ScOption, ReactiveFormsModule],
  template: `
    <sc-select class="inline-block" [formControl]="pageSizeFormControl">
      @for (pageSizeOption of pageSizeOptions(); track $index) {
        <sc-option [value]="pageSizeOption">{{ pageSizeOption }}</sc-option>
      }
    </sc-select>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPageSizeSelect {
  /** The set of provided page size options to display to the user. */
  readonly pageSizeOptions = input<number[]>([5, DEFAULT_PAGE_SIZE, 25]);

  /** Number of items to display on a page. By default, set to 10. */
  readonly pageSize = input<number>(DEFAULT_PAGE_SIZE);

  pageSizeFormControl = new FormControl(this.pageSize());
}
