import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialog-demo',
  imports: [],
  template: `
    <p>dialog-demo works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemo {}
