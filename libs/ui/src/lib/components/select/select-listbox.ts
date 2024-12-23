import { A11yModule } from '@angular/cdk/a11y';
import { CdkListbox } from '@angular/cdk/listbox';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  input,
  output,
} from '@angular/core';

import { ScOptionModel } from './option-model';
import { ScSelectState } from './select-state';

@Component({
  selector: 'sc-select-listbox',
  imports: [A11yModule, CdkListbox],
  template: `
    <div
      class="relative z-50 max-h-96 w-full min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      [cdkTrapFocusAutoCapture]="true"
      (cdkListboxValueChange)="handleOptionChange($event.value)"
      cdkTrapFocus
      cdkListbox
    >
      @for (option of options(); track option.value) {
        <!--sc-option [cdkOption]="option" [option]="option" sc-option>{{ option.label }}</sc-option-->
      }
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSelectListbox {
  state = inject(ScSelectState);

  options = input<ScOptionModel[]>([]);

  handleOptionChange(v: readonly unknown[]) {
    this.state.selectedOption.set(v[0] as ScOptionModel);
    this.optionSelected.emit();
  }

  optionSelected = output();
}
