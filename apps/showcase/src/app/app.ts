import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ScScrollToTop } from '@semantic-components/ui';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  template: `
    <router-outlet />
  `,

  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  private readonly scrollToTop = inject(ScScrollToTop);

  private readonly document = inject<Document>(DOCUMENT);

  private readonly classList = signal([
    // 'min-h-screen',
    'bg-background',
    'font-sans',
    'antialiased',
  ]);

  ngOnInit() {
    this.document.body.classList.add(...this.classList());
    this.scrollToTop.init();
  }
}
