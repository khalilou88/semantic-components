import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'sc-select-option',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
  `,
  styles: ``,
  host: {
    role: 'listbox',
    '[attr.aria-label]': 'value',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOptionComponent {
  @Input()
  public value!: any;

  @HostBinding('class.disabled')
  @Input()
  public disabled = false;
}
