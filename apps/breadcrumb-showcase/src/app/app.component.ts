import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from '@semantic-components/breadcrumb';

@Component({
  imports: [RouterModule, BreadcrumbComponent],
  selector: 'app-root',
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>My Application</h1>
        <app-breadcrumb
          [showHome]="true"
          [enableNavigation]="true"
          homeLabel="Dashboard"
          homeUrl="/dashboard"
        ></app-breadcrumb>
      </header>

      <main class="app-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      .app-container {
        min-height: 100vh;
        background-color: #f8fafc;
      }

      .app-header {
        background: white;
        border-bottom: 1px solid #e2e8f0;
        padding: 1rem 2rem;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }

      .app-header h1 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: #1e293b;
      }

      .app-main {
        padding: 2rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'breadcrumb-showcase';
}
