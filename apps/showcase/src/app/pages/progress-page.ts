import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';

import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-progress-page',
  imports: [ScProgress],
  template: `
    <div class="m-10">
      <sc-progress [value]="progress()" />

      <br />
      <br />
      <br />

      <sc-progress mode="indeterminate" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressPage implements OnInit {
  progress = signal<number>(0);

  ngOnInit() {
    setTimeout(() => this.progress.set(40), 3000);
  }
}
