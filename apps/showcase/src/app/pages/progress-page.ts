import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';

import { ScCircularProgress, ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-progress-page',
  imports: [ScProgress, ScCircularProgress],
  template: `
    <div class="m-10">
      <sc-progress [value]="progress()" />

      <br />
      <br />
      <br />

      <sc-progress mode="indeterminate" />

      <br />
      <br />
      <br />

      <sc-circular-progress [value]="progress()" />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProgressPage implements OnInit {
  progress = signal<number>(0);

  ngOnInit() {
    setTimeout(() => this.progress.set(50), 3000);
  }
}
