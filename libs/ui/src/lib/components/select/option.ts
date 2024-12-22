import { CdkOption } from '@angular/cdk/listbox';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { ScSelectModel } from './select-model';
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
      @if (isSelected()) {
        <span class="absolute left-2 flex size-3.5 items-center justify-center">
          <svg-check-icon class="size-4" />
        </span>
      }

      {{ option().label }}
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkOption],
})
export class ScOption {
  state = inject(ScSelectState);

  option = input.required<ScSelectModel>();

  isSelected = computed(() => {
    return this.state.selectedOption()?.value === this.option().value;
  });

  select() {
    this.state.selectedOption.set(this.option());
    this.state.closeOverlay.set(true);
  }
}
