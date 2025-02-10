import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ScOption, ScSelect } from '../select';
import { PaginatorService } from './paginator.service';

@Component({
  selector: 'sc-page-size-select',
  imports: [ScSelect, ScOption, ReactiveFormsModule],
  template: `
    <sc-select class="inline-block" [formControl]="paginatorService.pageSizeFormControl">
      @for (pageSizeOption of paginatorService.pageSizeOptions(); track $index) {
        <sc-option [value]="pageSizeOption">{{ pageSizeOption }}</sc-option>
      }
    </sc-select>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPageSizeSelect {
  protected readonly paginatorService = inject(PaginatorService);
}
