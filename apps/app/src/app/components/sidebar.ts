import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { DocumentationRoutesService } from '../documentation/documentation-routes.service';
import { Sitemap } from '../documentation/documentation.types';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  template: `
    <div class="w-full py-6 px-4">
      @if (sitemap()?.sections) {
        @let sections = sitemap()?.sections;
        @for (section of sections; track section.id) {
          <div class="mb-4">
            <h3 class="px-2 mb-2 text-lg font-semibold">{{ section.title }}</h3>
            <div class="space-y-1">
              @for (page of section.pages; track page.id) {
                <a
                  class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  [routerLink]="[page.path]"
                  routerLinkActive="bg-accent"
                >
                  {{ page.title }}
                </a>
              }
            </div>
          </div>
        }
      }

      <div class="mb-4">
        <h3 class="px-2 mb-2 text-lg font-semibold">Getting Started</h3>
        <div class="space-y-1">
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium bg-accent text-accent-foreground"
            href="#"
          >
            Introduction
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Installation
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Typography
          </a>
        </div>
      </div>
      <div class="mb-4">
        <h3 class="px-2 mb-2 text-lg font-semibold">Components</h3>
        <div class="space-y-1">
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Accordion
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Alert
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Button
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Card
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Dialog
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Dropdown Menu
          </a>
          <a
            class="flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            href="#"
          >
            Form
          </a>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar implements OnInit {
  private readonly docRoutesService = inject(DocumentationRoutesService);

  sitemap: Signal<Sitemap | null> = toSignal(this.docRoutesService.sitemap$, {
    initialValue: null,
  });

  ngOnInit() {
    this.docRoutesService.loadRoutes();
  }
}
