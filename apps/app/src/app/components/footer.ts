import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <div class="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
      <p class="text-sm text-muted-foreground">© 2025 Semantic Components. All rights reserved.</p>
      <div class="flex items-center gap-4">
        <a
          class="text-sm text-muted-foreground hover:text-foreground"
          routerLink="/docs/components/accordion"
        >
          Docs
        </a>
        <a
          class="text-sm text-muted-foreground hover:text-foreground"
          href="https://github.com/gridatek/semantic-components"
          target="_blank"
        >
          GitHub
        </a>
        <a
          class="text-sm text-muted-foreground hover:text-foreground"
          href="https://x.com/88_khlil"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}
