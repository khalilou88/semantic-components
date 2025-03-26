import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';

import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-progress-demo',
  imports: [ScProgress],
  template: `
    <sc-progress class="w-[60%]" [value]="progress()" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressDemo implements OnInit {
  protected readonly progress = signal<number>(0);

  ngOnInit() {
    setTimeout(() => this.progress.set(77), 1000);
  }
}
