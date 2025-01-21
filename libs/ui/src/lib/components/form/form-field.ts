import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'sc-form-field',
  imports: [],
  template: `
    <p>form-field works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFormField {
  readonly id = signal<string>(inject(_IdGenerator).getId('sc-form-field-'));
}
