import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>footer works!</p>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}
