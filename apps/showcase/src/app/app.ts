import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ScImageCropper } from '@semantic-components/image-cropper';
import { ScScrollToTop } from '@semantic-components/ui';

@Component({
  imports: [RouterOutlet, ScImageCropper],
  selector: 'app-root',
  template: `
    <sc-image-cropper></sc-image-cropper>

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
