import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  inject,
  input,
  model,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

import { scInputStyles } from '../input/input';

@Component({
  selector: 'input[sc-input-number]',
  imports: [],
  template: `
    <ng-content />
  `,
  host: {
    '[class]': 'class()',
    '[value]': 'value()',
    '(input)': 'handleInput()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputNumber {
  private readonly hostRef = inject(ElementRef);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn(scInputStyles(), this.classInput()));

  readonly value = model<number>(0);

  handleInput() {
    const newValue = this.hostRef.nativeElement.value;
    this.value.set(newValue);
  }
}
