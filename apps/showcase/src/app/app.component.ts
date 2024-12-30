import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <router-outlet />
  `,

  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly document = inject<Document>(DOCUMENT);

  private readonly classList = signal([
    'min-h-screen',
    'bg-background',
    'font-sans',
    'antialiased',
  ]);

  ngOnInit() {
    this.document.body.classList.add(...this.classList());
  }
}
