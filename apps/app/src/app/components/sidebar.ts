import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { cn } from '@semantic-components/utils';

import { SitemapLoader } from '../core/sitemap';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="w-full py-6 px-4">
      @for (section of sections(); track section.id) {
        <div class="mb-4">
          <h3 class="px-2 mb-2 text-lg font-semibold">{{ section.title }}</h3>
          <div class="space-y-1">
            @for (page of section.pages; track page.id) {
              <a
                class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                #link="routerLinkActive"
                [routerLink]="[page.path]"
                [class.text-muted-foreground]="!link.isActive"
                routerLinkActive="bg-accent text-accent-foreground"
              >
                {{ page.title }}
              </a>
            }
          </div>
        </div>
      }
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  private readonly sitemapLoader = inject(SitemapLoader);

  protected readonly sections = computed(() => this.sitemapLoader.sitemap()?.sections);

  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block size-full', this.classInput()));
}
