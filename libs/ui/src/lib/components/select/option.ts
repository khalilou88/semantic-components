import { Highlightable } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

import { SvgCheckIcon } from '@semantic-icons/lucide-icons';

import { cn } from '../../utils';
import { ScOptionModel } from './option-model';
import { ScSelectState } from './select-state';

@Component({
  selector: 'button[sc-option]',
  imports: [SvgCheckIcon],
  template: `
    @if (isSelected()) {
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <svg-check-icon class="size-4" />
      </span>
    }

    {{ _isActive() }}

    <ng-content />
  `,
  host: {
    '[class]': 'classes()',
    '(click)': 'select()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption implements Highlightable {
  class = input<string>('');

  classes = computed(() =>
    cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.class(),
    ),
  );

  state = inject(ScSelectState);

  option = input.required<ScOptionModel>();

  optionValue = computed(() => {
    return this.option().value;
  });

  isSelected = computed(() => {
    return this.state.selectedOption()?.value === this.optionValue();
  });

  select() {
    this.state.selectedOption.set(this.option());
    this.state.closeOverlay.set(true);
  }

  _isActive = signal(false);

  setActiveStyles(): void {
    this._isActive.set(true);
  }
  setInactiveStyles(): void {
    this._isActive.set(false);
  }
  disabled?: boolean | undefined;
  getLabel?(): string {
    return this.option().label;
  }
}
