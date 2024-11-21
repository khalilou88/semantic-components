import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { InlineDatePickerComponent } from './inline-date-picker.component';

@Component({
  selector: 'sc-date-picker',
  standalone: true,
  imports: [CommonModule, InlineDatePickerComponent, CdkMenuTrigger, CdkMenu, CdkMenuItem],
  template: `
    <div class="relative max-w-sm" [cdkMenuTriggerFor]="menu">
      <button class="absolute inset-y-0 end-0 flex items-center pe-3.5">
        <svg
          class="size-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </button>
      <input
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        type="text"
        placeholder="Select date"
      />
    </div>

    <ng-template #menu>
      <div cdkMenu>
        <sc-inline-date-picker />
      </div>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent implements OnInit {
  constructor(@Inject(LOCALE_ID) private readonly localeId: string) {}

  ngOnInit() {
    console.log('fffff');
  }
}
