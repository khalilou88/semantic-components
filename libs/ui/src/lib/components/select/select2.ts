import { A11yModule, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  input,
  viewChildren,
} from '@angular/core';

import { ScOption } from './option';
import { ScOptionModel } from './option-model';
import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-select2',
  imports: [ScOption, A11yModule],
  template: `
    <button
      class="relative z-50 max-h-96 w-full min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      [cdkTrapFocusAutoCapture]="true"
      [id]="_getPanelId()"
      (keyup)="onKeydown($event)"
      cdkTrapFocus
    >
      @for (option of options(); track option.value) {
        <sc-option [option]="option">{{ option.label }}</sc-option>
      }
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect2 implements AfterViewInit {
  //TODO change this
  _getPanelId() {
    return `panel-12584`;
  }

  state = inject(ScSelectState);

  options = input<ScOptionModel[]>([]);

  readonly viewOptions = viewChildren(ScOption);

  private keyManager!: ActiveDescendantKeyManager<ScOption>;

  ngAfterViewInit(): void {
    console.log(this.viewOptions());

    this.keyManager = new ActiveDescendantKeyManager(this.viewOptions()).withWrap();
  }

  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER) {
      this.state.selectedOption.set(
        this.keyManager.activeItem ? this.keyManager.activeItem.option() : undefined,
      );
    } else {
      this.keyManager.onKeydown(event);
    }
  }
}
