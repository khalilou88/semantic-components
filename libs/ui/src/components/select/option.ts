import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
  input,
  viewChild,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-option',
  imports: [SvgCheckIcon],
  template: `
    <button
      class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      (click)="select()"
      type="button"
    >
      @if (state.selectedValue() === value()) {
        <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <svg-check-icon class="h-4 w-4" />
        </span>
      }

      <span #label>
        <ng-content />
      </span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption {
  state = inject(ScSelectState);

  value = input.required<string>();

  label = viewChild<ElementRef<HTMLSpanElement>>('label');

  select() {
    this.state.selectedValue.set(this.value());
    this.state.selectedLabel.set(this.label()?.nativeElement.textContent ?? '');
  }
}
