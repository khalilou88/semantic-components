import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <div class="container mx-auto px-96">
      <h1>Welcome to showcase 👋</h1>

      <a routerLink="/nav">nav</a>
      <a class="ml-2" routerLink="/dropdown">dropdown</a>

      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'showcase';
}
