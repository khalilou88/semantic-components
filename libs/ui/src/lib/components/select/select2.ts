import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
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
  imports: [ScOption],
  template: `
    <div
      class="relative z-50 max-h-96 w-full min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      [id]="_getPanelId()"
    >
      @for (option of options(); track option.value) {
        <sc-option [option]="option">{{ option.label }}</sc-option>
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelect2 implements AfterViewInit {
  state = inject(ScSelectState);

  options = input<ScOptionModel[]>([]);

  readonly viewOptions = viewChildren(ScOption);

  private keyManager!: ActiveDescendantKeyManager<ScOption>;

  ngAfterViewInit(): void {
    console.log(this.viewOptions());

    this.keyManager = new ActiveDescendantKeyManager(this.viewOptions()).withWrap();
  }
}
