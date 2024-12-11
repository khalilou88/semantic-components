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
    <sc-progress [value]="progress()" />
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
