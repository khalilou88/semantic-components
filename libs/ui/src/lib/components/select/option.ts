import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  computed,
  input,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'sc-option',
  imports: [],
  template: `
    <span #label>
      <ng-content />
    </span>
  `,
  host: {},
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOption {
  value = input.required<unknown>();

  labelEl = viewChild.required<ElementRef<HTMLSpanElement>>('label');

  label = computed(() => {
    return this.labelEl().nativeElement.textContent?.trim();
  });
}
