import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  output,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'sc-option',
  imports: [SvgCheckIcon],
  template: `
    <button
      class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      (click)="select()"
      type="button"
    >
      <svg-check-icon class="h-4 w-4" />

      <ng-content />
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption {
  value = input.required<string>();

  selected = output<string>();

  select() {
    this.selected.emit(this.value());
  }
}
